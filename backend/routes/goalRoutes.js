const express = require('express');
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require('../controllers/goalControllers');

router.route('/').get(getGoals).post(setGoals);
router.route('/:id').put(updateGoals).delete(deleteGoals);
// router.get('/', getGoals);
// router.post('/', setGoals);
// router.put('/', updateGoals);
// router.delete('/', deleteGoals);

module.exports = router;
