// Importing required files and packages here
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import storiesRoutes from "./routes/storiesRoutes.js";



dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Api Routes
app.use("/api/users", userRoutes);

app.use("/api/stories", storiesRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});


// Error Handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.yellow.bold);
});
