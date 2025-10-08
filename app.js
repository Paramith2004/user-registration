const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Make sure this path is correct

const app = express();

// Middleware
app.use(bodyParser.json());

// Use the routes from userRoutes.js
app.use('/', userRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/userDB')
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.log(err));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
