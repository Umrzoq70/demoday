import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai"; 
import { BsFacebook } from "react-icons/bs"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import Logo from '../assets/site-logo.svg'
import Logo1 from '../assets/site-logo-gold.svg'
import hotelbg from '../img/hotel-bg.png'
import { Link } from "react-router-dom";
import hotel1 from '../img/hotel1.png'
import hotel2 from '../img/hotel2.png'
import hotel3 from '../img/hotel3.png'
import hotel32 from '../img/hotel32.jpg'
import hotel27 from '../img/hotel27.jpg'
import hotel28 from '../img/hotel28.jpg'
import hotel29 from '../img/hotel29.jpg'
import hotel30 from '../img/hotel30.jpg'
import hotel31 from '../img/hotel31.jpg'
import hotel33 from '../img/hotel33.jpg'
import hotel34 from '../img/hotel34.jpg'
import hotel35 from '../img/hotel35.jpg'







const Gallery = () => {
  return (
    <div>
      <div className="h-[640px] bg-cover bg-center relative  bg-[#c29a5c]  "
       >
      <div className=" flex justify-center items-center gap-[400px] ">
      <div className="flex justify-center items-center gap-[30px]">
      <a className="text-white z-0 text-[25px]" href=""><AiOutlineTwitter /></a>
      <a className="text-white z-0 text-[20px]" href=""><BsFacebook /></a>
      <a className="text-white z-0 text-[25px]" href=""><AiOutlineInstagram /></a>
      </div>
      <img className='h-[100px] w-[180px] z-0' src={Logo} alt="" />
      <div className="z-0"><button className= " text-white font-serif border h-[45px] w-[140px]">BOOK NOW</button></div>
      </div> 
    <div className="z-0">
      <nav>
        <ul className="flex justify-center items-center font-serif gap-[25px] text-[18px] font-bold mt-7">
          <li><Link className="text-stone-200 " to="/">Home</Link></li>
          <li><Link className="text-stone-200 " to="/history"> History</Link></li>
          <li><Link className="text-stone-200 " to="/experience">Experience</Link></li>
          <li><Link className="text-stone-200 " to="/rooms">Rooms & Suites</Link></li>
          <li><Link className="text-stone-200  " to="/dining">Dining</Link></li>
          <li><Link className="text-white  " to="/gallery">Gallery</Link></li>
          <li><Link className="text-stone-200  " to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
      <div>
       
        <h1 className="text-center text-white mt-14 font-serif text-[120px]">Gallery</h1>
      </div>

       

      </div>



      <div className='flex justify-center  gap-6 relative  bottom-40 '>
        <div className=''>
          <img className='' src={hotel29} alt="" />
          <img className='mt-6' src={hotel34} alt="" />
          <img className='mt-6' src={hotel27} alt="" />
          <img className='mt-6' src={hotel30} alt="" />
        </div>
        <div>
          <img className=''  src={hotel33} alt="" />
          <img className='mt-6' src={hotel32} alt="" />
          <img className='mt-6' src={hotel35} alt="" />
          <img className='mt-6' src={hotel3} alt="" />
        </div>
        <div>
          <img className=' h-[325px] ' src={hotel2} alt="" />
          <img className='mt-6 h-[330px] ' src={hotel1} alt="" />
          <img className='mt-6' src={hotel31} alt="" />
          <img className='mt-6 ' src={hotel28} alt="" />
        </div>
      </div>


    </div>
  )
}

export default Gallery
