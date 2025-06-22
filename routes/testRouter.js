const express = require('express');
//router objects
const router = express.Router();
//import controller 
const { testController } = require('../controllers/testController');


//define api Routes
router.get('/', testController)



//exports
module.exports = router