const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');



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

        //hashed password 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        //create an new user 
        const newUser = new userModel({username , email , password:hashedPassword});
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
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validation
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "All fields are required.",
      });
    }

    // 2. Check user
    const existingUser = await userModel.findOne({ email });
    if (!existingUser) {
      return res.status(404).send({
        success: false,
        message: "User is not registered with this email.",
      });
    }

    // 3. Compare password
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Incorrect password.",
      });
    }

    // 4. Generate token
    const token = JWT.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // 5. Success
    return res.status(200).send({
      success: true,
      message: "User logged in successfully",
      token,
      user: {
        id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
      },
    });

  } catch (error) {
    console.error("Login error:", error.message);
    return res.status(500).send({
      success: false,
      message: "Issue in login",
      error: error.message,
    });
  }
};


module.exports = { registerController, loginController };