const users = require('../db/users');

const getAllUsers = (req, res) => {
  res.send(users);
};

module.exports = { getAllUsers };
