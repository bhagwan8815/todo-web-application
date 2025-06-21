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

//import routes and mount api
const testRoute = require('./routes/testRouter');
app.use('/api/v1',testRoute );

//listen or start the applicaiton here
app.listen(PORT,(req, res)=>{
    console.log(`app is running on port ${PORT}`.bgMagenta)
})



