import { AiOutlineInstagram } from "react-icons/ai"; 
import { BsFacebook } from "react-icons/bs"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import React from 'react'
import Logo from '../../assets/site-logo.svg'
import Logo1 from '../../assets/site-logo-gold.svg'
import hotelbg from '../../img/hotel-bg.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="h-[650px] bg-cover bg-center relative   "
       style={{  backgroundImage: `url(${hotelbg})` }}>
      <div className=" flex justify-center items-center gap-[400px] ">
      <div className="flex justify-center items-center gap-[30px]">
      <a className="text-white z-0 text-[25px]" href=""><AiOutlineTwitter /></a>
      <a className="text-white z-0 text-[20px]" href=""><BsFacebook /></a>
      <a className="text-white z-0 text-[25px]" href=""><AiOutlineInstagram /></a>
      </div>
      <img className='h-[100px] w-[180px] z-0' src={Logo} alt="" />
      <div className="">
        <button className= "hover:bg-white hover:text-[#c29a5c] transition duration-300  text-white text-[14px] font-serif cursor-pointer border h-[45px] w-[150px]">
        BOOK NOW
      </button>
      </div>
      </div> 
    <div className="z-0">
      <nav>
        <ul className="flex justify-center items-center font-serif gap-[25px] text-[18px] font-bold mt-7">
          <li><Link className="text-white " to="/">Home</Link></li>
          <li><Link className="text-gray-300  " to="/history"> History</Link></li>
          <li><Link className="text-gray-300 " to="/experience">Experience</Link></li>
          <li><Link className="text-gray-300 " to="/rooms">Rooms & Suites</Link></li>
          <li><Link className="text-gray-300  " to="/dining">Dining</Link></li>
          <li><Link className="text-gray-300  " to="/gallery">Gallery</Link></li>
          <li><Link className="text-gray-300  " to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
      <div>
        <h1 className="text-center text-white mt-13 font-serif text-[25px]">Welcome To</h1>
        <h1 className="text-center text-white mt-5 font-serif text-[120px]">Raj Vilas Palace</h1>
      </div>

        <div className="flex justify-center items-center  mt-30 ">
        <div className="flex justify-center items-center bg-white w-[1200px] h-[150px] gap-25 shadow-2xl">
            <img  src={Logo1} alt="" />
            <h1 className="">Egestas odio netus sed augue bibendum morbi suspendisse adipiscing amet <br />
              id varius faucibus vitae vitae ipsum.
            </h1>
            <div className="z-0"><button className= "hover:bg-[#c29a5c] hover:text-white transition duration-500 uppercase text-[14px] text-[#c29a5c] cursor-pointer  font-serif border h-[45px] w-[210px]">Check Availability</button></div>
        </div>
        </div>

      </div>
     
      
      
      
    
      
    </div>
  )
}

export default Navbar
