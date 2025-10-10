const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Make sure this path is correct

const app = express(); 

app.use(bodyParser.json());

app.use('/', userRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/userDB')
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.log(err));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
