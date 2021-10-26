const express = require('express');
const { getAllUsers, createSimpleUser } = require('../controllers/user');

const router = express.Router();

router.route('/all').get(getAllUsers);
router.route('/create').get(createSimpleUser);

module.exports = router;
