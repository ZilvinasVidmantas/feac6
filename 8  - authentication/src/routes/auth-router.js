const express = require('express');
const { UserModel } = require('../models/user-model');

const authRouter = express.Router();

authRouter.post('/register', async (req, res) => {
  const userData = req.body;

  // TODO: patikrinti ar duomenys teisingi, pvz slaptažodis reikiamo formato
  const exsistingUser = await UserModel.findOne({ email: userData.email });
  if (exsistingUser !== null) {
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

authRouter.post('/login', (req, res) => {

});


module.exports = {
  authRouter
};