const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const messageController = require('../controllers/message.controller');
const { body } = require('express-validator');

router.post(
  '/send',
  [
    body('email').isEmail().withMessage('Invalid Email'),
    body('firstname')
      .isLength({ min: 2 })
      .withMessage('First name must be at least 2 characters long'),
    body('lastname')
      .isLength({ min: 2 })
      .withMessage('last name must be at least 2 characters long'),
    body('phone')
      .isLength({ min: 10 })
      .withMessage('phone number must be at least 10 characters long'),
    body('message')
      .isString()
      .isLength({ min: 2 })
      .withMessage('empty message not accepted'),
  ],
  authMiddleware.authUser,
  messageController.sendMessage
);
router.get(
  '/get/:id',
  authMiddleware.authBroker,
  messageController.getMessages
);

module.exports = router;
