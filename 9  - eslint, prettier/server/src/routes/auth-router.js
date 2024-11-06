const express = require('express');
const { UserModel } = require('../models/user-model');
const { generateToken } = require('../utils/password');

const authRouter = express.Router();

authRouter.post('/register', async (req, res) => {
  const userData = req.body;

  // TODO: patikrinti ar duomenys teisingi, pvz slaptažodis reikiamo formato
  const foundUser = await UserModel.findOne({ email: userData.email });
  if (foundUser !== null) {
    return res.status(400).json({ message: 'User with this email already exists' });
  }

  try {
    const createdUser = UserModel(userData);
    await createdUser.save();

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error registering new user.', error: error.message });
  }
});

authRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    const foundUser = await UserModel.findOne({ email });
    if (!foundUser) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    const passwordIsCorrect = await foundUser.isCorrectPassword(password);
    if (!passwordIsCorrect) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    const token = generateToken({ id: foundUser._id }); 


    return res.status(200).json({ status: 'success', token, user: foundUser });
  } catch (error) {
    return res.status(500).json({ message: 'Error logging in.', error: error.message });
  }
});


module.exports = {
  authRouter
};