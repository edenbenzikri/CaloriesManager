//Chen Krichelly, id: 207017070
//Eden Ben Zikri, id: 318949039

const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
    res.send('Connect check');
  });

router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    //return JSON user details
    res.json(user);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
