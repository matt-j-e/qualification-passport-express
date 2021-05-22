const express = require('express');
const cors = require('cors');
const router = express.Router();
const qualificationControllers = require('../controllers/qualifications.js');

router.all("*", cors());

router
  .route('/')
  .get(qualificationControllers.getAll)
  .post(qualificationControllers.create);

router
  .route('/:qualificationId')
  .get(qualificationControllers.getById)
  .patch(qualificationControllers.updateById)
  .delete(qualificationControllers.deleteById)

module.exports = router;
