const asyncHandler = require('express-async-handler');
// @desc  GET goals
// @route GET/api/goals
// @acess Private
const getGoals = asyncHandler((req, res) => {
  res.status(200).json({ mesage: 'get goals' });
});

// @desc  Set goals
// @route POST/api/goals
// @acess Private
const setGoals = asyncHandler((req, res) => {
  if (!req.body.text) {
    // text is empty
    // res.status(400).json({ mesage: 'Please add a text field' });
    res.status(400);
    throw new Error('please add a text field');
  }
  console.log(req.body);
  res.status(200).json({ mesage: 'set goals' });
});

// @desc  Update goals
// @route PUT/api/goals/:id
// @acess Private
const updateGoals = asyncHandler((req, res) => {
  res.status(200).json({ message: `update goals ${req.params.id}` });
});

// @desc  Delete goals
// @route DELETE/api/goals/:id
// @acess Private
const deleteGoals = asyncHandler((req, res) => {
  res.status(200).json({ message: `update goals${req.params.id}` });
});
module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
