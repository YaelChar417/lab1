const express = require('express');
const router = express.Router();

const userController = require('../controllers/users');

router.get('/signup', userController.get_signup);
router.post('/signup', userController.post_signup);

router.get('/login', userController.get_login);
router.post('/login', userController.post_login)
router.get('/logout', userController.get_logout);

module.exports = router;