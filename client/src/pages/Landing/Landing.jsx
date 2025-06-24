import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../../assest/heroimg.jpg';

export default function Landing() {
  return (
   <div className='flex max-w-[1100px] mx-auto mt-12 '>
   
    <div className='flex flex-row items-center gap-12'>
      {/* left side div */}
      <div className='flex flex-col '>
          <h1 className='text-3xl font-bold'>Organize work with life </h1> 
          <span className='text-orange-700 text-3xl font-bold'>finally.</span>
          <p className='text-black font-serif mt-2'>type just anything into the task field and TodoList</p>
          <p className='text-black font-serif'>on-of-its-kind natural language recognition will instanly fill your to-do-list.</p>
          {/* button  */}
          <div className='flex gap-3 mt-5'>
            <Link className='border rounded-md border-black px-2 py-1 font-bold ' to='/signup'>SignUp Now</Link>
            <Link className='border rounded-md border-black px-2 py-1 font-bold ' to='/login'>Login</Link>
          </div>
      </div>

      {/* right side div */}
      <div>
        <img className='' src={heroImg} alt="heroimg" width='350px' />
      </div>
    
    </div>


   </div>
  )
}
