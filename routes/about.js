//Chen Krichelly, id: 207017070
//Eden Ben Zikri, id: 318949039

const express = require('express');
const router = express.Router();

//developer details
const developers = [
  {
    firstname: 'Chen',
    lastname: 'Krichelly',
    id: '207017070',
    email: 'chenkrichelly@gmail.com',
  },
  {
    firstname: 'Eden',
    lastname: 'Ben Zikri',
    id: '318949039',
    email: 'edenbz1998@gmail.com',
  },
];

router.get('/about', async (req, res) => {
  try {
    res.status(200).json(developers);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

