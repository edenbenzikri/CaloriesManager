//Chen Krichelly, id: 207017070
//Eden Ben Zikri, id: 318949039

const express = require('express');
const router = express.Router();
const Calorie = require('../models/Calorie');

router.post('/addcalories', async (req, res) => {
  try {
    // data from the request body
    const { user_id, year, month, day, description, category, amount } = req.body;
    const id = await Calorie.countDocuments() + 1; // Generate unique id
    // Create a new calorie consumption item
    const newCalorie = new Calorie({ user_id, year, month, day, id, description, category, amount });
    // Save the new item to the database
    await newCalorie.save();
    res.json(newCalorie);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.get('/report', async (req, res) => {
  try {
    const { user_id, month, year } = req.query;
    // Find calorie entries for these fields
    const calories = await Calorie.find({ user_id, month, year });

    const report = {
      breakfast: [],
      lunch: [],
      dinner: [],
      other: []
    };

    calories.forEach(calorie => {
     // Push each value to it's category array  
      report[calorie.category].push({
        day: calorie.day,
        description: calorie.description,
        amount: calorie.amount
      });
    });

    res.json(report);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
