const { Worker } = require('../models');
const helpers = require('./helpers');

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
        res.status(200)
        .send({ message: "Authenticated" });
    } else {
      res.status(404)
      .send({ message: "Password does not match" });
    }
    
  })
};
