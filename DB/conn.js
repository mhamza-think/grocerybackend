const mongoose = require ('mongoose');
require('dotenv').config();


const connectDb = async () =>{
    try {
        const conn = await mongoose.connect(process.env.DATABASE,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log('MongoDB connection successful');
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDb;