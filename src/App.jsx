import { AiFillHome } from "react-icons/ai"; 
import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import History from "./Pages/History";
import Experience from "./Pages/Experience";
import Rooms from "./Pages/Rooms";
import Dining from "./Pages/Dining";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact"

const App = () => {
  return (
    <div>
       
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/rooms" element={<Rooms/>}/>
        <Route path="/dining" element={<Dining/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>

    </div>
  )
}

export default App
