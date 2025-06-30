import React, { useState } from "react";

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

  const signupHandler = (e) => {
      e.preventDefault();
    alert(`login data is  ${formData.email}   ${formData.username}`)
    console.log("form data", formData)
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
