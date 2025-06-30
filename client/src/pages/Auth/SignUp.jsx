import React, { useState } from "react";
import AuthServices from "../../Services/AuthServices";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler=(e)=>{
    const {name, value}= e.target;

    setFormData((prevData)=>({
      ...prevData,
      [name]:value
    }))

  }

  const signupHandler = async (e) => {
     try{
      e.preventDefault()
      const data = {
        username: formData.username,
        email: formData.email,
        password: formData.password
      }
      console.log("data is ", data);
      const res = await AuthServices.registerUser(data)
      console.log(res)
     }catch(err){
      console.log(err)

     }
  };


  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="username">UserName:</label>
          <input
            type="text"
            placeholder="Enter your UserName....."
            name="username"
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Enter your Email...."
            name="email"
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={changeHandler}
          />
        </div>

        <button type="submit" onClick={signupHandler}>
          SignUp
        </button>
      </form>
    </div>
  );
}
