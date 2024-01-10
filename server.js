require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./utils/db");
const router = require("./router/auth-router");
const PORT = 5000;

app.use(express.json());

app.use("/api/auth", router);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
