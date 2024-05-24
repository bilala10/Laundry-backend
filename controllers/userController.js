const asyncHandler = require('express-async-handler');
const User = require('../models/User');

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      aboutYou: user.aboutYou,
      notifications: user.notifications,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.aboutYou = req.body.aboutYou || user.aboutYou;
    user.notifications = req.body.notifications || user.notifications;

    try {
      const updatedUser = await user.save();
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        aboutYou: updatedUser.aboutYou,
        notifications: updatedUser.notifications,
      });
    } catch (error) {
      if (error.code === 11000) { // Duplicate key error code
        res.status(400).json({ message: 'Email already exists' });
      } else {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
      }
    }
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

module.exports = {
  getUserProfile,
  updateUserProfile,
};
