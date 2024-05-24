// src/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
  aboutYou: { type: String, enum: ['Just me', 'Couple', 'Family'], required: true },
  textNotificationPreference: { type: String, enum: ['All', 'Scheduling and service only', 'Service only', 'None'], required: true },
  paymentMethods: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
