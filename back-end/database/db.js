const mongoose = require("mongoose");

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlparser: true,
            useCreateIndex: true,
        });
        console.log(`MongoDB connected ${conn.connection.host}`);
        console.log("Database ");
    }
    catch(error){
        console.error('Error: ${error.message}');
        process.exit(1);
    }
}

module.exports= connectDB;