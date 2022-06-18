require("dotenv").config();
require("./db");
const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log("Server is running on port 5000");
});
