const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

const authRoutes = require("./routes/auth");
const studentRoutes = require("./routes/student"); // Add this


app.use(cors());
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


// Existing Login/Register API
app.use("/api/auth", authRoutes);


// Student CRUD API
app.use("/api/students", studentRoutes);


app.listen(process.env.PORT, () => {
  console.log(`Server Running on Port ${process.env.PORT}`);
});
