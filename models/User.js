//Chen Krichelly, id: 207017070
//Eden Ben Zikri, id: 318949039

const mongoose = require('mongoose');

//creating the User collection
const UserSchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  birthday: Date
});

module.exports = mongoose.model('User', UserSchema);
