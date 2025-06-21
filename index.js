const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 4000

app.listen(PORT,(req, res)=>{
    console.log(`app is running on port ${PORT}`)
})

app.use('/',(req, res)=>{
   console.log(" <h1>this is dummy route for checking .</h1>")
})

