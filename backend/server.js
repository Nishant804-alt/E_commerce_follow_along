const app = require("./app"); // Import the app instance from app.js
const connectDatabase = require("./db/database");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Handle uncaught exceptions (e.g., console.log(undefinedVariable))
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to an uncaught exception");
  process.exit(1);
});

// Load environment variables
dotenv.config({ path: "./config/.env" });

// Connect to the database
connectDatabase();

// Start the server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

// Handle unhandled promise rejections (e.g., failed database connection)
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to an unhandled promise rejection");

  server.close(() => {
    process.exit(1);
  });
});
