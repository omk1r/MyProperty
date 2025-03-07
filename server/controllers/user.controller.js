const userModel = require('../models/user.model');
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstname, lastname, email, password } = req.body;

  const userExists = await userModel.findOne({ email });

  if (userExists) {
    return res.status(400).json({
      message: 'User already exists',
    });
  }

  const hashedPassword = await userModel.hashPassword(password);

  const user = await userModel.create({
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();

  res.status(201).json({
    token,
    user,
  });
};

module.exports.loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select('+password');

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  const token = user.generateAuthToken();

  res.status(200).json({ token, user });
};

module.exports.getUserProfile = async (req, res) => {
  res.status(201).json(req.user);
};

module.exports.logoutUser = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  try {
    await blacklistTokenModel.updateOne(
      { token: token },
      { token: token },
      { upsert: true }
    );
    res.status(200).json({ message: 'Logged out' });
  } catch (error) {
    next(error);
  }
};
