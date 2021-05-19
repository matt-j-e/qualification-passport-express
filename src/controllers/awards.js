const { Award, Qualification, Worker } = require('../models');
const helpers = require('./helpers');

exports.create = (req, res) => helpers.createItem('award', res, req.body);

exports.getAll = (req, res) => helpers.getAllItems('award', res);

exports.getById = (req, res) => helpers.getItemById('award', res, req.params.awardId);

exports.updateById = (req, res) => helpers.updateItem('award', res, req.body, req.params.awardId);

exports.deleteById = (req, res) => helpers.deleteItem('award', res, req.params.awardId);

// exports.getAll = (req, res) => {
//   return Award.findAll({ include: [ Worker, Qualification ] })
//     .then((items) => res.status(200)
//     .json(items));
// };

exports.getByWorkerId = (req, res) => {
  return Award.findAll({
    order: [["award_date", "DESC"]],
    where: {
      WorkerId: req.params.workerId
    },
    include: Qualification
  })
  .then((items) => res.status(200)
  .json(items));
};