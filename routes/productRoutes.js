const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', (req, res) => {
    res.json({ message: 'Get all products' });
});

// Get a single product by ID
router.get('/:id', (req, res) => {
    res.json({ message: `Get product with ID ${req.params.id}` });
});

// Add a new product
router.post('/', (req, res) => {
    res.json(req.body);
});

// Update a product by ID
router.put('/:id', (req, res) => {
    res.json({ message: `Update product with ID ${req.params.id}`, data: req.body });
});

// Delete a product by ID
router.delete('/:id', (req, res) => {
    res.json({ message: `Delete product with ID ${req.params.id}` });
});

module.exports = router;
