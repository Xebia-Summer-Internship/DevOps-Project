const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGODB_URI;

mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("can't connect");
    } else {
      console.log("connection success!");
    }
  }
);

// const connectDB = async() => {
//     try{
//         const conn = await mongoose.connect(process.env.MONGO_URI, {
//             useUnifiedTopology: true,
//             useNewUrlparser: true,
//             useCreateIndex: true,
//         });
//         console.log(`MongoDB connected ${conn.connection.host}`);
//         console.log("Database ");
//     }
//     catch(error){
//         console.error('Error: ${error.message}');
//         process.exit(1);
//     }
// }

// module.exports= connectDB;
