import express from "express";
import db from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import caloriesRoutes from "./routes/caloriesRoutes.js";

const app = express();

const PORT = process.env.PORT || 3000;

// Connect to the database
db.authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Error connecting to database:', err));

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: false })) //Middleware

app.use('/api/users', userRoutes)
app.use('/api/calories', caloriesRoutes)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});