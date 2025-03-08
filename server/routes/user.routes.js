const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/authMiddleware');

router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Invalid Email'),
    body('firstname')
      .isLength({ min: 2 })
      .withMessage('First name must be at least 2 characters long'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('password must be at least 6 characters long'),
    body('role')
      .isIn(['customer', 'broker'])
      .withMessage("Role must be either 'customer' or 'broker'"),
  ],
  userController.createUser
);

router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('password must be at least 6 characters long'),
  ],
  userController.loginUser
);

router.get('/profile', authMiddleware.authUser, userController.getUserProfile);

router.get('/logout', authMiddleware.authUser, userController.logoutUser);

module.exports = router;
