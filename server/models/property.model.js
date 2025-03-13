const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  bedroom: {
    type: String,
    required: true,
  },
  bathroom: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
});

const propertyModel = mongoose.model('property', propertySchema);

module.exports = propertyModel;
