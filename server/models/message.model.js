const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    propertyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'property',
      required: true,
    },
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    firstname: {
      type: String,
      required: true,
      minLength: [2, 'First name must be atleast 2 characters'],
    },
    lastname: {
      type: String,
      minLength: [3, 'Last name must be atleast 3 characters'],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minLength: [5, 'Email must be at least 5 characters long'],
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      minLength: [10, 'Phone must be at least 5 characters long'],
    },
    message: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const messageModel = mongoose.model('message', messageSchema);

module.exports = messageModel;
