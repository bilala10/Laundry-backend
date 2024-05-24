const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Create a new order
router.post('/', orderController.createOrder);

// Get orders by user ID
router.get('/user/:userId', orderController.getOrdersByUserId);

// Update order status
router.put('/:id', orderController.updateOrderStatus);

// Get order by ID
router.get('/:id', orderController.getOrderById);

// Delete order
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
