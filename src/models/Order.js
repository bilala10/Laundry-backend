// src/models/Order.js
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  services: [{ type: String, required: true }],
  pickupDate: { type: Date, required: true },
  deliveryDate: { type: Date },
  status: { type: String, enum: ['Scheduled for Pickup', 'Scheduled for Delivery', 'Completed'], default: 'Scheduled for Pickup' },
  items: [{ description: { type: String }, price: { type: Number } }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);
