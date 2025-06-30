import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'



export default function Login() {
  const [formData, setFormData] = useState(
                           {
                                  email:"",
                                   password:""
                           });
                        

  const changeHandler = (e)=>{
    const {name ,value } = e.target;

        setFormData((prevData)=>({
          ...prevData,
          [name]:value
        }))
    }


  const submitHandler=(e)=>{
    e.preventDefault();
    alert(`login data is  ${formData.email}`)
    console.log("form data", formData)
  }
  return (
    <div className='flex flex-col max-w-[1100px] content-center mx-auto  items-center mt-[30px]'>

      <h1 className='text-3xl font-bold text-orange-500'>Login Form </h1>
      <form  className='mt-12 flex flex-col  items-center gap-6' action="">

       <div className='flex gap-3'>
           <label htmlFor="email">Email:</label>
        <input name='email'
         type="email" 
         placeholder='Enter your email id.....'
         value={formData.email} 
         onChange={changeHandler}/>
       </div>
        
        <div className='flex gap-3'>
           <label htmlFor="password">Password:</label>
        <input type="password" 
       name="password"
         placeholder='Enter your password..'
         value={formData.password}
         onChange={changeHandler} />
        </div>

        <div>
          <button type='submit' className='border rounded-md bg-green-200 hover:bg-green-400 px-2 py-1'
          onClick={submitHandler}>Login</button>
        <p>Not Have an Acoount <span className='text-blue-700'> <Link to='/signup'>Register</Link></span></p>
        </div>
      </form>
    </div>
  )
}
