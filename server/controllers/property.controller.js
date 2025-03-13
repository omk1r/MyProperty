const { validationResult } = require('express-validator');
const propertyModel = require('../models/property.model');

module.exports.createProperty = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, location, price, description, bedroom, bathroom, area } =
    req.body;
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
      createdBy: req.user._id,
    });

    res.status(201).json(newProperty);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports.getProperties = async (req, res) => {
  try {
    const properties = await propertyModel.find({}).populate('createdBy');
    res.status(201).json({ properties });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports.getSingleProperty = async (req, res) => {
  const { id } = req.params;
  try {
    const singleProperty = await propertyModel
      .findById(id)
      .populate('createdBy');
    if (!singleProperty) {
      return res.status(404).json({ error: 'Property not found' });
    }

    res.status(200).json(singleProperty);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports.editSingleProperty = async (req, res) => {
  const { id } = req.params;

  // Validate input data
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const singleProperty = await propertyModel.findById(id);
    if (!singleProperty) {
      return res.status(404).json({ error: 'Property not found' });
    }

    const userId = req.user._id;

    // Check user authorization
    if (userId.toString() !== singleProperty.createdBy.toString()) {
      return res
        .status(401)
        .json({ error: 'You are not authorized to access this property' });
    }

    // Prepare the update object
    const updateData = {};
    const { name, location, price, description, bedroom, bathroom, area } =
      req.body;

    if (name) updateData.name = name;
    if (location) updateData.location = location;
    if (price) updateData.price = price;
    if (description) updateData.description = description;
    if (bedroom) updateData.bedroom = bedroom;
    if (bathroom) updateData.bathroom = bathroom;
    if (area) updateData.area = area;
    if (req.files && req.files.length > 0) {
      updateData.images = req.files.map((file) => file.path);
    }

    const updatedProperty = await propertyModel.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true }
    );

    res.status(200).json(updatedProperty);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports.deleteSingleProperty = async (req, res) => {
  const { id } = req.params;

  try {
    const singleProperty = await propertyModel.findById(id);
    if (!singleProperty) {
      return res.status(404).json({ error: 'Property not found' });
    }

    const userId = req.user._id;

    if (userId.toString() !== singleProperty.createdBy.toString()) {
      return res
        .status(401)
        .json({ error: 'You are not authorized to access this property' });
    }
    await propertyModel.findByIdAndDelete(id);
    res.status(200).json({ message: 'Property deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
