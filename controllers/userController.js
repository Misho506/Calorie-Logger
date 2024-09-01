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

// Controller method to delete a user by ID
const deleteUser = asyncHandler(async (req, res) =>  {
  const { id } = req.params;

  try {
    await UserModel.destroy({
      where: { id },
    });
    res.status(200).send(`User deleted with ID: ${id}`)
  } catch (error) {
    res.status(500).json({ error: error.message });
    throw new Error(error.message);
  }
})

// Controller method to find an user by Id
const findUserById = asyncHandler(async (req, res) => {
  const { id } = req.body;
  try {
    const user = await UserModel.findOne({ where: { id } });
    if (user) {
      res.json(user);
    } else {
      throw new Error(`Invalid id, id: ${id}`);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    throw new Error(error.message);
  }
})

// Controller method to update a user by ID
const updateUserbyID = asyncHandler(async (req, res) => {
  const { email, userName, password, lastName, firstName } = req.body;
  const { id } = req.params;

  try {
    const numUpdated = await UserModel.update(
      { email, userName, password, lastName, firstName }, 
      { where:{ id } } 
    );

    if (numUpdated[0] === 0) {
      res.status(404).json({ message: `No user found with ID: ${id}` });
    } else {
      res.status(200).json({ message: `User updated successfully with ID: ${id}` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
export {
  getAllUsers,
  createUser,
  deleteUser,
  updateUserbyID,
  findUserById
};
