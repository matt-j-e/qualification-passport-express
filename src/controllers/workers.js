const { Worker } = require('../models');
const helpers = require('./helpers');
const admin = require('firebase-admin');
const serviceAccount = require("../../service-account-file.json");
// better solution would be to hold this path in .env

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

exports.create = (req, res) => helpers.createItem('worker', res, req.body);

exports.getAll = (req, res) => helpers.getAllItems('worker', res);

exports.getById = (req, res) => helpers.getItemById('worker', res, req.params.workerId);

exports.updateById = (req, res) => helpers.updateItem('worker', res, req.body, req.params.workerId);

exports.deleteById = (req, res) => helpers.deleteItem('worker', res, req.params.workerId);

exports.authenticateWorker = (req, res) => {
  return Worker.findOne({
    where: {
      email: req.body.email
    }
  })
  .then((worker) => {
    if (!worker) {
      res.status(404)
      .send({ message: "User not found" });
    } else if (worker.password === req.body.password) {
        const uid = worker.id.toString();
        admin
          .auth()
          .createCustomToken(uid)
          .then((customToken) => {
            res.status(200)
            .json(customToken);
          })
          .catch((error) => {
            console.log('Error creating custom token:', error);
          });        
    } else {
      res.status(404)
      .send({ message: "Password does not match" });
    }
  })
};
