import express from "express";
import { connectDB } from "./config/db.js";
import {apiRouter} from "./routes/index.js"; // Ensure this is exported correctly in your routes file
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
//import {apiRouter}from "./routes/userRoutes.js"

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000; // Use environment variable or fallback to 3000

// Middleware

// app.use(cookieParser());

// Connect to Database
connectDB();

// Routes
app.use("/api", apiRouter);



// Test Route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the Server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
