const User = require('../models/User');

const getAllUsers = async (req, res) => {
  const user = User.findById(1);
  res.status(200).json({ user });
};

const createSimpleUser = async (req, res) => {
  const { name, password } = req.body;
  const user = new User({ name, password });
  await user.save();
  res.status(200).json({ user });
};

module.exports = { getAllUsers, createSimpleUser };
