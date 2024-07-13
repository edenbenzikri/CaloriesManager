//Chen Krichelly, id: 207017070
//Eden Ben Zikri, id: 318949039

const mongoose = require('mongoose');

//creating the Calorie collection
const CalorieSchema = new mongoose.Schema({
  user_id: Number,
  year: Number,
  month: Number,
  day: Number,
  id: { type: Number, unique: true },
  description: String,
  category: String,
  amount: Number
});

module.exports = mongoose.model('Calorie', CalorieSchema);
