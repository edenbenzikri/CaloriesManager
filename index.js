//Chen Krichelly, id: 207017070
//Eden Ben Zikri, id: 318949039

require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user');
const calorieRoutes = require('./routes/calorie');
const aboutRoutes = require('./routes/about');
const populateUser = require('./config/populateUser');

const app = express();
connectDB();

// Populate initial user if doesn't exist yet
populateUser();

app.use(express.json());

app.use('/', userRoutes);
app.use('/', calorieRoutes);
app.use('/', aboutRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
