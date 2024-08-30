import CaloriesModel from '../models/caloriesModel.js';
import asyncHandler from 'express-async-handler';
import UserModel from '../models/userModel.js';

// Controller method to get all user
const getAllCalories = asyncHandler(async (req, res) => {
  try {
    const calories = await CaloriesModel.findAll();
    res.json(calories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Controller method to create a new user
const addCalorieToUser = asyncHandler(async (req, res) => {
  const { amount, burned, userId } = req.body;
  try {
    const foundUser = await UserModel.findOne({ where: { id: userId } });
    if (foundUser) {
      const newCalorie = await CaloriesModel.create({
        amount,
        burned,
        userId
      });
      res.status(201).json(newCalorie);
    } else {
      throw new Error(`Invalid userId, userId: ${userId}`);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    throw new Error(error.message);
  }
});

export {
  getAllCalories,
  addCalorieToUser
};
