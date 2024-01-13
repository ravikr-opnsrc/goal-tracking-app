const express = require('express');
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalControllers');

router.route('/').get(getGoals).post(setGoals);
router.route('/:id').put(updateGoal).delete(deleteGoal);
// router.get('/', getGoals);
// router.post('/', setGoals);
// router.put('/', updateGoals);
// router.delete('/', deleteGoals);

module.exports = router;
