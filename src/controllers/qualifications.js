const { Qualification } = require('../models');
const helpers = require('./helpers');

exports.create = (req, res) => helpers.createItem('qualification', res, req.body);

exports.getAll = (req, res) => helpers.getAllItems('qualification', res);

exports.getById = (req, res) => helpers.getItemById('qualification', res, req.params.qualificationId);

exports.updateById = (req, res) => helpers.updateItem('qualification', res, req.body, req.params.qualificationId);

exports.deleteById = (req, res) => helpers.deleteItem('qualification', res, req.params.qualificationId);
