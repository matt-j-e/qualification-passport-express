const { Worker, Qualification, Award } = require("../models");

const getModel = (model) => {
  const models = {
    worker: Worker,
    qualification: Qualification,
    award: Award,
  };

  return models[model];
};

const getInclude = (model) => {
  const includes = {
    worker: Award,
    award: [Worker, Qualification],
    qualification: null,
  };

  return includes[model];
};

const createItem = (model, res, item) => {
  const Model = getModel(model);

  return Model.create(item)
    .then((newItem) => {
      if (newItem.dataValues.password) delete newItem.dataValues.password;
    res.status(201).json(newItem);
    })
    .catch(error => {
      const errorMessages = error.errors.map(e => e.message);
    res.status(400).json({ error: errorMessages });
    });
};

const getAllItems = (model, res) => {
  const Model = getModel(model);

  return Model.findAll({ include: getInclude(model) })
    .then((items) => res.status(200)
    .json(items));
};

module.exports = {
  createItem,
  getAllItems,
};
