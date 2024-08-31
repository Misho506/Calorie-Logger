import { Router } from 'express';
import { getAllUsers, createUser, findUserById } from '../controllers/userController.js';

const userRoutes = Router();
// Route to get all user
userRoutes.get('/getAll', getAllUsers);
// Route to get a user by Id
userRoutes.get('/getUserById', findUserById);

// Route to create a new user
userRoutes.post('/newUser', createUser);

export default userRoutes;
