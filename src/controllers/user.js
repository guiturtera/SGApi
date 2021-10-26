const User = require('../models/User');

const getAllUsers = async (req, res) => {
  const user = User.findById(1);
  res.status(200).json({ user });
};

const createSimpleUser = async (req, res) => {
  const user = new User({ name: 'Gui', password: 'aaa' });
  await user.save();
  res.status(200).json({ user });
};

module.exports = { getAllUsers, createSimpleUser };
