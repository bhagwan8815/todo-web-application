const mongoose = require('mongoose')
const colors = require('colors')
require('dotenv').config();

const MONGO_URL = process.env.MONGODB_URL

const dbConnect = async ()=>{
    mongoose.connect(MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log(`database connected successfully`.bgGreen)})
    .catch((error)=>{
        console.log("issue in database connection....")
        console.log(error.message)
        process.exit(1);
    })

}

module.exports = dbConnect; 

