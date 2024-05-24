// routes/authRoutes.js
const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
// Uncomment the following lines once the corresponding controller functions are implemented
// router.post('/login', loginUser);
// router.get('/profile', protect, getUserProfile);

module.exports = router;
