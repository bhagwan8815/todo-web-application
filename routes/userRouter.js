const express = require('express');
const  {registerController , loginController }= require('../controllers/userController');



//router object
const router = express.Router();


//define router
//register ----->method --post
router.post('/register', registerController)

//login----methos --post
router.post('/login', loginController)
//exports

module.exports= router;
