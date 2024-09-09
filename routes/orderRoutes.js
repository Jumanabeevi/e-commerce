const express = require('express');
const router = express.Router();
const { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder } = require('../controllers/orderController');

// Get all orders (with populated user and product data)
router.get('/', getAllOrders);

// Get a single order by ID
router.get('/:id', getOrderById);

// Create a new order
router.post('/', createOrder);

// Update an order by ID
router.put('/:id', updateOrder);

// Delete an order by ID
router.delete('/:id', deleteOrder);

module.exports = router;

