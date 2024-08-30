import { Router } from 'express';
import { getAllCalories, addCalorieToUser } from '../controllers/caloriesController.js';

const caloriesRoutes = Router();
// Route to get all Calories
caloriesRoutes.get('/getAll', getAllCalories);

// Route to create a new Calorie
caloriesRoutes.post('/newCalorie', addCalorieToUser);

export default caloriesRoutes;
