const express = require('express');
const router = express.Router();

const userController = require('../controllers/users');

router.get('/login', userController.get_login);
router.post('/login', userController.post_login)

module.exports = router;