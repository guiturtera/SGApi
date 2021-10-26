//const User = require('../models/User');

const login = async (req, res) => {
  res.status(200).send('login works');
  /*const { username, password } = req.body;
  if (username in logins) {
    res.status(200).send(logins);
  } else {
    res.status(400).send('User not found!');
  }*/
};

const register = async (req, res) => {
  res.status(200).send('REGISTER PAGE');
};

module.exports = { login, register };
