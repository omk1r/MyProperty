const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware');
const propertyController = require('../controllers/property.controller');
const upload = require('../middlewares/upload.middleware');

router.post(
  '/create',
  upload.array('images', 10), // Accept up to 10 images
  [
    body('name')
      .isLength({ min: 2 })
      .withMessage('Property name must be at least 2 characters long'),
    body('location').notEmpty().withMessage('Location is required'),
    body('price').notEmpty().withMessage('Price is required'),
    body('description')
      .isLength({ min: 10 })
      .withMessage('Description must be at least 10 characters long'),
    body('bedroom')
      .isInt({ min: 1 })
      .withMessage('Bedroom count must be at least 1'),
    body('bathroom')
      .isInt({ min: 1 })
      .withMessage('Bathroom count must be at least 1'),
    body('area').notEmpty().withMessage('Area is required'),
    body('keyFeatures')
      .optional()
      .isArray()
      .withMessage('Key features must be an array'),
    body('keyFeatures.*')
      .optional()
      .isString()
      .withMessage('Each key feature must be a string'),
  ],
  authMiddleware.authBroker,
  propertyController.createProperty
);

router.get('/');

module.exports = router;
