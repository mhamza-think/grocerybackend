const express = require ('express');

const app = express();

app.use=(express.json());

const connectDB = require('./DB/conn');

connectDB();

const port = process.env.PORT;

app.listen(port,function (){
    console.log(`server running on port no ${port}`);
})