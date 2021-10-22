const express = require('express');
const { getAllUsers } = require('../controllers/user');

const router = express.Router();

router.route('/all').get(getAllUsers);

module.exports = router;
