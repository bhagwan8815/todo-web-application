const userModel = require("../models/userModel");

const registerController = async (req, res)=>{

    try{
        //fetch data from req body
        const {username, email, password} = req.body;
        //validation
        if(!username || !email || !password){
            return res.status(500).send(
                {
                    success:false,
                    message:"All fields are required..",
                }
            )
        }

        //check for existing user
        const exitUser = await userModel.findOne({email});
        if(exitUser){
            return res.status(500).send(
                {
                    success:false,
                    message:"user already registread with this email.."
                }
            )
        }

        //create an new user 
        const newUser = new userModel({username , email , password});
        //save newUser in mongodb with the help of save method of mongodb
        await newUser.save();

        //return a success response
        return res.status(201).send({
            success:true,
            message:"user registred successfully"
        })

    }catch(err){
       console.log(err)
       res.status(500).send({
        success:false,
        message:'error in registration of user',

       })
    }
}

module.exports =  registerController;