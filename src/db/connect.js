const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

connectDB('mongodb+srv://admin:admin@cluster0.mbnwz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
module.exports = connectDB;
