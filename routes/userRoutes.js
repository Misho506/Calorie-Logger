import { Router } from 'express';
import { getAllUsers, createUser } from '../controllers/userController.js';

const userRoutes = Router();
// Route to get all user
userRoutes.get('/getAll', getAllUsers);

// Route to create a new todo
userRoutes.post('/newUser', createUser);

export default userRoutes;
