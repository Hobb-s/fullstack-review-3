const express = require('express');
const router = express.Router();
const UserController = require('./controllers/UserController');

router.route('/user/signup')
  .post(UserController.signUp);

router.route('/user/signup/:username/:password')
  .get(UserController.login);

module.exports = router;