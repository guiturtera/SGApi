const User = require('../models/User');
const saltedSha256 = require('salted-sha256');

const SALT_TO_CHANGE = '*@_zC4CjPZ(D';

const validateUser = async (userJson) => {
  const errors = [];
  const { username, password } = userJson;
  if (password.length < 8) {
    errors.push('Password length must be higher than 8!');
  }
  if (username.length < 8) {
    errors.push('Username must be higher than 8!');
  }

  if (errors.length === 0) return { username, password };
  throw new Error(errors);
};

const encryptUserToCreate = async (userJson) => {
  const newUserJson = userJson;
  newUserJson.password = await saltedSha256(userJson.password, SALT_TO_CHANGE, true);
  return userJson;
};

const addUserToDb = async (userJson) => {
  const { username, password } = userJson;
  const newUser = new User({ username, password });
  newUser.save();
  return newUser;
}

const login = async (req, res) => {
  //const passwordHash = 
  res.status(200).send('login works');
  /*const { username, password } = req.body;
  if (username in logins) {
    res.status(200).send(logins);
  } else {
    res.status(400).send('User not found!');
  }*/
};

const register = async (req, res) => {
  const { username, password } = req.body;
  await validateUser({ username, password })
    .then((user) => encryptUserToCreate(user))
    .then((user) => addUserToDb(user))
    .then((user) => res.status(200).send(user))
    .catch((error) => {res.status(400).send({ 'error': error.message })});
};

module.exports = { login, register };
