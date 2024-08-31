import { Router } from 'express';
import { getAllUsers, createUser , deleteUser, updateUserbyID, findUserById} from '../controllers/userController.js';

const userRoutes = Router();
// Route to get all user
userRoutes.get('/getAll', getAllUsers);
// Route to get a user by Id
userRoutes.get('/getUserById', findUserById);

// Route to create a new user
userRoutes.post('/newUser', createUser);

// Route to delete a user by ID
userRoutes.delete('/deleteUser/:id', deleteUser);

// Route to update a user by ID
userRoutes.put('/updateUserbyID/:id', updateUserbyID);

export default userRoutes;
