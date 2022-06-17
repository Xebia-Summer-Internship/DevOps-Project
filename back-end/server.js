const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/db.js");

dotenv.config();

const app = express();

connectDB();

app.get("/", (req,res) => {
    res.send("API is running")
});


const PORT = process.env.PORT || 3000;
app.listen(3000,console.log(`Listening to port ${PORT}`));