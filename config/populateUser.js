//Chen Krichelly, id: 207017070
//Eden Ben Zikri, id: 318949039

const User = require('../models/User');

//adding the first user if doesn't exist yet
const populateUser = async () => {
  try {
    const userExists = await User.findOne({ id: 123123 });
    // check if the user exists
    if (!userExists) {
      const user = new User({
        id: 123123,
        first_name: 'moshe',
        last_name: 'israeli',
        birthday: new Date('1990-01-10')
      });

      await user.save();
      console.log('Initial user added');
    }
  } catch (err) {
    console.error('Error populating initial user:', err.message);
  }
};

module.exports = populateUser;
