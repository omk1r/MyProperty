const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');

router.post(
  '/register',
  body('email').isEmail().withMessage('Invalid Email'),
  body('firstname')
    .isLength({ min: 2 })
    .withMessage('First name must be at least 2 characters long'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('password must be at least 6 characters long'),
  userController.createUser
);

module.exports = router;
