// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config(); // Load environment variables from .env file
connectDB(); // Connect to MongoDB

const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Define API routes
app.use('/api/auth', authRoutes); // Routes for authentication
app.use('/api/orders', orderRoutes); // Routes for orders
app.use('/api/users', userRoutes); // Routes for user management

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
