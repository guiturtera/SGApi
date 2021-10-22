const morgan = require('morgan');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const swaggerFile = require('../docs/swagger_output.json');

const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// ENDPOINTS
app.use('/auth', authRouter);
app.use('/user', userRouter);

app.listen(5000, () => { console.log('Listening at port 5000'); });
