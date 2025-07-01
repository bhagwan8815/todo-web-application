import { useState } from "react";
import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Landing from "./pages/Landing/Landing";
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Todos from "./pages/Todos/Todos";
import About from './pages/About/About'
import  { Toaster } from 'react-hot-toast';


function App() {
 
  return(
    <div className="max-w[1200px]">
      <Routes>
     
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/todolist' element={<Todos/>} />


      </Routes>
       <Toaster />
    </div>
  )
}

export default App;
