// controllers/orderController.js
const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const { services, date } = req.body;
  try {
    const order = new Order({
      user: req.user._id,
      services,
      date,
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
