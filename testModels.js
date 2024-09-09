const connectDB = require('./config/db');
const Product = require('./models/Product');
const User = require('./models/User');
const Order = require('./models/Order');

connectDB();

// Test creating a product
const testProduct = async () => {
  try {
    const newProduct = new Product({
      name: 'Sample Product',
      price: 20,
      description: 'Sample product description',
    });
    await newProduct.save();
    console.log('Product created:', newProduct);
  } catch (err) {
    console.error(err);
  }
};

mongoose.connection.on('connected', () => {
  console.log('Successfully connected to MongoDB');
});
  
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Run the test
testProduct();
