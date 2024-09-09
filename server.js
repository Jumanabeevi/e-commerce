const express = require('express');
const app = express();
const db = require('./db'); 
const connectDB = require('./db'); // Import the connectDB function

// Connect to MongoDB
connectDB();

// Import the database connection file
require('./db');

// Import the routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Middleware to parse JSON bodies
app.use(express.json());

// Use the routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.listen(5000, () => {
    console.log('Server is running on port 3000');
});
