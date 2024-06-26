// routes/userRoutes.js
const express = require('express');
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

module.exports = router;
