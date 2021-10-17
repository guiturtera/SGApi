const login = async (req, res) => {
  res.status(200).send('LOGIN PAGE');
};

const register = async (req, res) => {
  res.status(200).send('REGISTER PAGE');
};

module.exports = { login, register };
