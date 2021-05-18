const express = require('express');
const cors = require('cors');
const router = express.Router();
const workerControllers = require('../controllers/workers.js');

router.all("*", cors());

router
  .route('/')
  .get(workerControllers.getAll)
  .post(workerControllers.create);

router
  .route('/:workerId')
  .get(workerControllers.getById)
  .patch(workerControllers.updateById)
  .delete(workerControllers.deleteById)

module.exports = router;
