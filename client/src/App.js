import { useState } from "react";
import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Landing from "./pages/Landing/Landing";
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Todos from "./pages/Todos/Todos";
import About from './pages/About/About'


function App() {
 
  return(
    <div>
      <Routes>
     
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/todolist' element={<Todos/>} />


      </Routes>
    </div>
  )
}

export default App;
