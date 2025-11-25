const express = require("express");
const { connectDB } = require("./db/connection");
const dotenv = require("dotenv");
const bookRoutes = require("./routes/bookRoutes");
const morgan = require('morgan')

dotenv.config();
connectDB();


const app = express();
const PORT = 4000;

//MIDDLEWARE
app.use(express.json())
app.use(morgan("dev"))

// This leads to homepage
app.get("/", (req, res) => {
  res.send("Welcome to our book app! Make yourself at home");
});

// Allows bookRoutes to be fully functional from the bookRoutes.js
app.use("/books", bookRoutes);

app.listen(PORT),
  () => {
    console.log(`Server is listening on port: ${PORT}`);
  };
