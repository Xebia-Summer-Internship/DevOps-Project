require("dotenv").config();
require("./db");
const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

const AuthRouter = require("./routes/auth.js");

app.use(express.json());

// Routes available
// app.get("/hello", (req, res) => {
//   res.send("Hello World");
// });

app.use("/api", AuthRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
