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


//login controller for login
const loginController =  async(req, res) =>{
    try{
      //fetch email and password from the req body
      const {email , password} = req.body;

      //validation
      if(!email || !password){
        return res.status(500).send(
            {
                success:false,
                message:"all fields are required."
            }
        )
      }

      //check user is registed or not 
      const exitUser =  await userModel.findOne({email});
      //
      if(exitUser){
        //compare the password
        const exitUserPassword = exitUser.password;
        if(exitUserPassword===password){
            return res.status(200).send({
                success:true,
                message:"user logged in successfully",
                exitUser
            })
        }

      }

      return res.status(500).send({
        success:false,
        message:"user is not registred with this email."
      })
    }catch(error){
     console.log(error);
     return res.status(500).send({
        success:false,
        message:"issue in login"
     })
    }

}

module.exports = { registerController, loginController };