import User from '../models/user.js';
// Controller method to get all user
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Controller method to create a new user
const createUser = async (req, res) => {
  const { email, userName, password, name, lastName } = req.body;
  try {
    const newUser = await User.create({
      email,
      userName,
      password,
      name,
      lastName
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default {
  getAllUsers,
  createUser
};
