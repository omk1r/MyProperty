const { validationResult } = require('express-validator');
const propertyModel = require('../models/property.model');

module.exports.createProperty = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    name,
    location,
    price,
    description,
    bedroom,
    bathroom,
    area,
    keyFeatures,
  } = req.body;
  const images = req.files.map((file) => file.path);

  try {
    const newProperty = await propertyModel.create({
      name,
      location,
      price,
      description,
      bedroom,
      bathroom,
      area,
      images,
      keyFeatures,
      createdBy: req.user._id,
    });

    res.status(201).json(newProperty);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
