const express = require('express');
const registerController = require('../controllers/userController');

//router object
const router = express.Router();


//define router
//register ----->method --post
router.post('/register', registerController)

//exports

module.exports= router;
