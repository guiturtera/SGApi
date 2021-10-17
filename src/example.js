const morgan = require('morgan');
const express = require('express');
const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('test1', 'root', 'admin', { dialect: 'mysql', host: 'localhost', logging: false });
const app = express();

// Middleware
app.use(morgan('tiny'));

app.use(express.json());

// User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
// User.sync({ force: true }) - This creates the table, dropping it first if it already existed
// User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
// sequelize.sync() - automatically synchronize all models

// A.hasOne(B, { /* options */ });
// A.belongsTo(B, { /* options */ });
// A.hasMany(B, { /* options */ });
// A.belongsToMany(B, { through: 'C' })
// AUTO GENERATES ASSOSCIATIONS

class User extends Model {}
User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: DataTypes.INTEGER,
}, { sequelize, modelName: 'user' });

app.get('/test/db', async (req, res) => {
  await sequelize.authenticate()
    .then(res.send('success'))
    .catch(res.send('error'));
});

app.get('/register', async (req, res) => {
  console.log('here');
  await sequelize.sync() // FORCE RECRIATES
    .then(() => {
      const { username, age } = req.query;
      User.create({ username, age })
        .then(console.log('CREATED'))
        .catch(console.log('FAILED'));
    })
    .catch((err) => console.log(err));
    res.send(req.query);
});

app.get('/admin/users', async (req, res) => {
  await sequelize.sync()
    .then(async () => {
      const users = await User.findAll();
      res.send(JSON.stringify(users));
    })
    .catch(() => res.send('failed'));
});

app.get('/admin/users/:id', async (req, res) => {
  await sequelize.sync()
    .then(async () => {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (user === null){
        res.send('NO USER FOUND')
      }
      else{
        res.send(user)
      }
    })
})

app.listen(5000, () => {
  console.log('Listening at port 5000');
});
