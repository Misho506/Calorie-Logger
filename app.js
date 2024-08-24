import express from "express";
import db from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Calorie Logger application." });
});

// Connect to the database
db.authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Error connecting to database:', err));
// Middleware to parse JSON requests
app.use(express.json());
// Routes
app.use('/users', userRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});