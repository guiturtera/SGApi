const morgan = require('morgan');
const express = require('express');

const app = express();
// Middleware
app.use(morgan);

app.listen(5000, () => {
  console.log('Listening at port 5000');
});
