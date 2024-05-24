// models/Order.js
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  services: { type: [String], required: true },
  date: { type: Date, required: true },
  status: { type: String, default: 'Pending' },
}, { timestamps: true });

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
