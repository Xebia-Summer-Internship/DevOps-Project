const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/db.js");

dotenv.config();

const app = express();

connectDB();

app.get("/", (req,res) => {
    res.send("API is running")
});


const PORT = process.env.PORT || 5500;
app.listen(PORT,console.log(`Listening to port ${PORT}`));