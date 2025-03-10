const express = require('express');
const router = express.Router();

const userController = require('../controllers/users');
const isAuth = require('../util/is-auth');

router.get('/signup', isAuth, userController.get_signup);
router.post('/signup', isAuth, userController.post_signup);

router.get('/login', isAuth, userController.get_login);
router.post('/login', isAuth, userController.post_login)
router.get('/logout', isAuth, userController.get_logout);

module.exports = router;