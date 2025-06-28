import { BsArrowRight } from "react-icons/bs"; 
import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai"; 
import { BsFacebook } from "react-icons/bs"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import Logo from '../assets/site-logo.svg'
import Logo1 from '../assets/site-logo-gold.svg'
import Logo2 from '../assets/divider.svg'
import hotelbg from '../img/hotel-bg.png'
import { Link } from "react-router-dom";
import hotel33 from '../img/hotel33.jpg'
import hotel34 from '../img/hotel34.jpg'
import hotel35 from '../img/hotel35.jpg'

const Dining = () => {
  return (
    <div className="bg-[#f6ebed]">
      <div className="h-[500px] bg-cover bg-center relative  bg-[#c29a5c]  "
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
          <li><Link className="text-stone-200   " to="/history"> History</Link></li>
          <li><Link className="text-stone-200 " to="/experience">Experience</Link></li>
          <li><Link className="text-stone-200 " to="/rooms">Rooms & Suites</Link></li>
          <li><Link className="text-white  " to="/dining">Dining</Link></li>
          <li><Link className="text-stone-200  " to="/gallery">Gallery</Link></li>
          <li><Link className="text-stone-200  " to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
      <div>
       
        <h1 className="text-center text-white mt-14 font-serif text-[120px]">Dining</h1>
      </div>

       

      </div>

      <h1 className= " text-[#c29a5c] text-center text-[55px] mt-30 font-serif">
      Raj Vilas Palace
       </h1>
       <p className='text-center text-stone-600 mt-5'>
        Phasellus vitae volutpat donec at felis mauris tincidunt elit vel eu aenean commodo, tincidunt elementum et dictum <br /> 
        scelerisque tempus amet eget viverra lectus tristique suspendisse tortor feugiat eu lacinia sed elementum in iaculis <br /> 
        sapien cursus odio massa gravida ut molestie sed vel senectus donec nunc nunc nec laoreet.
      </p>
      <div className="flex justify-center mt-5 ">
           <img   src={Logo2} alt="" />
        </div>
      <div className="h-[500px]">
        <div className='flex justify-center mt-20 gap-18'>
          <div className='h-[]' >
            <img className='h-[500px] w-[950px]' src={hotel34} alt="" />
          </div>
          
          <div className='bg-white h-[500px] w-[500px]'></div>
        </div>
      <div className="flex justify-center">
        <div className="w-[630px] h-[350px] p-10 bg-[#f6ebed] relative left-[315px] bottom-[425px] z-10">
            <h1 className="text-[#c29a5c] text-[40px] font-serif">Square Terrace</h1>
            <p className="mt-4">
               Ultricies non suspendisse eget et vitae elit tincidunt elit sed velit sit vitae <br /> 
               quam pellentesque id dolor amet integer congue non non integer morbi <br /> 
               integer felis morbi imperdiet cras ut sed porttitor id donec duis at est, justo <br /> 
               pulvinar aliquam donec posuere pharetra eu, magna fusce sit massa, est eu, <br /> 
               id purus nam integer sapien.
            </p>
            <button className='text-[#c29a5c] flex items-center gap-4 mt-8 text-[15px] font-serif uppercase'>Explore<BsArrowRight /></button>

          </div>
      </div>
    </div>


    <div className="h-[500px]">
        <div className='flex justify-center mt-20 gap-18'>
          <div className='bg-white h-[500px] w-[500px]'></div>
          <div className='h-[]' >
            <img className='h-[500px] w-[950px]' src={hotel33} alt="" />
          </div>
        </div>
      <div className="flex justify-center">
        <div className="w-[630px] h-[350px] p-10 bg-[#f6ebed] relative right-[315px] bottom-[425px] z-10">
            <h1 className="text-[#c29a5c] text-[40px] font-serif">Dining Hall</h1>
            <p className="mt-4">
               Ultricies non suspendisse eget et vitae elit tincidunt elit sed velit sit vitae <br /> 
               quam pellentesque id dolor amet integer congue non non integer morbi <br /> 
               integer felis morbi imperdiet cras ut sed porttitor id donec duis at est, justo <br /> 
               pulvinar aliquam donec posuere pharetra eu, magna fusce sit massa, est eu, <br /> 
               id purus nam integer sapien.
            </p>
            <button className='text-[#c29a5c] flex items-center gap-4 mt-8 text-[15px] font-serif uppercase'>Explore<BsArrowRight /></button>

          </div>
      </div>
    </div>



    <div className="h-[450px]">
      <div className='flex justify-center mt-20 gap-18'>
          <div className='h-[]' >
            <img className='h-[500px] w-[950px]' src={hotel35} alt="" />
          </div>
          
          <div className='bg-white h-[500px] w-[500px]'></div>
        </div>
      <div className="flex justify-center ">
        <div className="w-[630px] h-[350px] p-10 bg-[#f6ebed] relative left-[315px] bottom-[425px] z-10">
            <h1 className="text-[#c29a5c] text-[40px] font-serif">Royal Dining</h1>
            <p className="mt-4">
               Ultricies non suspendisse eget et vitae elit tincidunt elit sed velit sit vitae <br /> 
               quam pellentesque id dolor amet integer congue non non integer morbi <br /> 
               integer felis morbi imperdiet cras ut sed porttitor id donec duis at est, justo <br /> 
               pulvinar aliquam donec posuere pharetra eu, magna fusce sit massa, est eu, <br /> 
               id purus nam integer sapien.
            </p>
            <button className='text-[#c29a5c] flex items-center gap-4 mt-8 text-[15px] font-serif uppercase'>Explore<BsArrowRight /></button>

          </div>
      </div>
    </div>


    </div>
  )
}

export default Dining
