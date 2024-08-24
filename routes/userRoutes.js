import { Router } from 'express';
import UserController from '../controllers/userController.js';

const router = Router();
// Route to get all user
router.get('/', UserController.getAllUsers);

// Route to create a new todo
router.post('/newUser', UserController.createUser);

export default router;
