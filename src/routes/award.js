const express = require('express');
const cors = require('cors');
const router = express.Router();
const awardControllers = require('../controllers/awards.js');

router.all("*", cors());

router
  .route('/')
  .get(awardControllers.getAll)
  .post(awardControllers.create);

router
  .route('/:awardId')
  .get(awardControllers.getById)
  .patch(awardControllers.updateById)
  .delete(awardControllers.deleteById);

router
  .route('/worker/:workerId')
  .get(awardControllers.getByWorkerId)

module.exports = router;
