require("dotenv").config(); // call the .env file and include the environment variables
require("./db"); // call db connection
const express = require("express"); // middleware call
const app = express(); // invoke function
const port = process.env.PORT || 5001;

const AuthRouter = require("./routes/auth.js"); // call the router

app.use(express.json());

// Routes available

app.use("/api", AuthRouter);

//  Server invoke
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
