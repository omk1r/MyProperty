const messageModel = require('../models/message.model');
const { validationResult } = require('express-validator');
const propertyModel = require('../models/property.model');

module.exports.sendMessage = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstname, lastname, email, phone, message, propertyId } = req.body;

  if (!firstname || !lastname || !email || !phone || !message || !propertyId) {
    return res.status(404).json({ message: 'all fields are required' });
  }

  try {
    const newMessage = await messageModel.create({
      propertyId,
      clientId: req.user._id,
      firstname,
      lastname,
      email,
      phone,
      message,
    });

    res.status(201).json(newMessage);
  } catch (err) {
    res.status(401).json({ errors: 'Server error', err });
  }
};

module.exports.getMessages = async (req, res) => {
  const broker = req.user._id;
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Property ID is required' });
  }

  console.log(id, broker.toString());

  try {
    const property = await propertyModel.findOne({
      _id: id,
      createdBy: broker.toString(),
    });

    if (!property) {
      return res.status(403).json({
        error: 'You are not authorized to view messages for this property',
      });
    }

    const messages = await messageModel
      .find({ propertyId: id })
      .sort({ timestamp: -1 });
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};
