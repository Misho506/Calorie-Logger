import UserModel from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

// Controller method to get all user
const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await UserModel.findAll();
    console.log("Users --------------", users);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Controller method to create a new user
const createUser = asyncHandler(async (req, res) => {
  const { email, userName, password, lastName, firstName } = req.body;
  console.log("=======", req.body)
  try {
    const newUser = await UserModel.create({
      email,
      userName,
      password,
      lastName,
      firstName
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.log("---------   ERROR ---------", error);
    res.status(500).json({ error: 'Internal Server Error' });
    throw new Error(`Invalid credentials "PASS" ${JSON.stringify(req.body)}`);
  }
});

export {
  getAllUsers,
  createUser
};
