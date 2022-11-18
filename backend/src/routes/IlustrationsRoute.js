const express = require('express');
const Ilustrations = require('../controller/IlustrationsController');

const router = express.Router();

router.route('/')
  .get(Ilustrations.getAll)
  .post(Ilustrations.add);

router.route('/:id')
  .get(Ilustrations.getByPK)
  .put(Ilustrations.update)
  .delete(Ilustrations.destroy);

module.exports = router;
