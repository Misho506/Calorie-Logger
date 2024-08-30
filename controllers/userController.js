import UserModel from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

// Controller method to get all user
const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await UserModel.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Controller method to create a new user
const createUser = asyncHandler(async (req, res) => {
  const { email, userName, password, lastName, firstName } = req.body;
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
    res.status(500).json({ error: error.message });
    throw new Error(error.message);
  }
});

// Controller method to find an user by Id
const findUserById = asyncHandler(async (req, res) => {
  const { id } = req.body;
  try {
    const user = await UserModel.findOne({ where: { id } });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
    throw new Error(error.message);
  }
})

export {
  getAllUsers,
  createUser,
  findUserById
};
