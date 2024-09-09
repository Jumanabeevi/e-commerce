const express = require('express');
const router = express.Router();

// User signup route
router.post('/signup', (req, res) => {
  // For now, just return the request body
  res.json(req.body);
});

// User login route
router.post('/login', (req, res) => {
  // For now, just return the request body
  res.json(req.body);
});

module.exports = router;
