// This is the logic that's being done here
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// dotenv.config();
// Make a async connection function using "mongoose.connect",
// that connects directly to MongoDB Atlas
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("YAY, we are connected to our database!");
  } catch (error) {
    console.log("oh no, connection to db failed");
  }
};

module.exports = { connectDB };
