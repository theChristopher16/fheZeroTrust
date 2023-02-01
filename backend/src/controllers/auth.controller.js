const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send({ message: 'Invalid password' });
    }
    res.send({ message: 'Login successful' });
  } catch (error) {
    res.status(500).send({ message: 'Server error' });
  }
};
