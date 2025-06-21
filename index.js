const express = require('express');
const colors = require('colors');
const cors = require('cors');

//create instance or object of express
const app = express();


//import dotenv file and use the congiguration 
require('dotenv').config();
const PORT = process.env.PORT || 5000

//middlewares 
app.use(express.json());
app.use(cors());

//routes


//listen or start the applicaiton here
app.listen(PORT,(req, res)=>{
    console.log(`app is running on port ${PORT}`.bgMagenta)
})
//create a dummy route 
app.get('/dummy',(req, res)=>{
   res.send("this is the dummy routes for checking .")
})

