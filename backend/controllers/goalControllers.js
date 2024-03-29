const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const User = require('../models/userModel'); // Make sure to import the User model

// @desc  GET goals
// @route GET/api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

// @desc  Set goals
// @route POST/api/goals
// @access Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(goal);
});

// @desc  Update goals
// @route PUT/api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error('Goal not found');
  }

  const user = await User.findById(req.user.id); // Corrected

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error('User not Authorized');
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// @desc  Delete goals
// @route DELETE/api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(404);
    throw new Error('Goal not found');
  }

  const user = await User.findById(req.user.id); // Corrected

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error('User not Authorized');
  }

  await goal.deleteOne();

  res
    .status(200)
    .json({ id: req.params.id, message: 'Goal deleted successfully' });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
};
