import { BiWifi2 } from "react-icons/bi"; 
import { FaConciergeBell } from "react-icons/fa"; 
import { FaRegSnowflake } from "react-icons/fa"; 
import { FaBed } from "react-icons/fa"; 
import { BsFillBoxFill } from "react-icons/bs"; 
import { BsArrowRight } from "react-icons/bs"; 
import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai"; 
import { BsFacebook } from "react-icons/bs"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import Logo from '../assets/site-logo.svg'
import Logo1 from '../assets/site-logo-gold.svg'
import hotelbg from '../img/hotel-bg.png'
import { Link } from "react-router-dom";
import hotel27 from '../img/hotel27.jpg'
import hotel28 from '../img/hotel28.jpg'
import hotel29 from '../img/hotel29.jpg'
import hotel30 from '../img/hotel30.jpg'
import hotel31 from '../img/hotel31.jpg'
import hotel32 from '../img/hotel32.jpg'

const Rooms = () => {
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
          <li><Link className="text-stone-200 " to="/history"> History</Link></li>
          <li><Link className="text-stone-200 " to="/experience">Experience</Link></li>
          <li><Link className="text-white " to="/rooms">Rooms & Suites</Link></li>
          <li><Link className="text-stone-200  " to="/dining">Dining</Link></li>
          <li><Link className="text-stone-200  " to="/gallery">Gallery</Link></li>
          <li><Link className="text-stone-200  " to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
      <div>
       
        <h1 className="text-center text-white mt-14 font-serif text-[120px]">Rooms & Suites</h1>
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


      <div className="flex justify-center  mt-20 gap-15">
        <div>
          <img className="w-[700px]" src={hotel27} alt="" />
          <h1 className="text-[30px] mt-7 font-serif font-semibold ">
           Deluxe Room
          </h1>
          <p className="text-stone-600 mt-2">
             Scelerisque arcu interdum in hendrerit curabitur ultrices ornare at vitae, vitae, neque suspendisse  <br /> 
             suspendisse leo, placerat amet pretium aliquam molestie pellentesque non viverra arcu a vitae,<br /> 
             commodo nec sit.
          </p>
          <div className="flex mt-7 gap-30 text-stone-600 ">
            <div className="leading-10">
              <h1 className="flex items-center gap-4"><BsFillBoxFill />16 M² space</h1>
              <h1 className="flex items-center gap-4" ><FaBed />Queen size bed</h1>
            </div>
            <div className="leading-10">
              <h1 className="flex items-center gap-4"><FaRegSnowflake />Air conditioner</h1>
              <h1 className="flex items-center gap-4"><FaConciergeBell />Free breakfast</h1>
            </div>
            
          </div>
          <button className='text-[#c29a5c] mt-8 gap-4  flex items-center  text-[15px] font-serif uppercase'>Book now<BsArrowRight /></button>

        </div>

        <div >
          <img className="w-[700px]" src={hotel28} alt="" />
          <h1 className="text-[30px] mt-7 font-serif font-semibold ">
          Super Deluxe Room
          </h1>
          <p className="text-stone-600 mt-2">
          Vestibulum tortor ornare ornare morbi dolor cursus id eget pellentesque mauris a sed at purus turpis <br /> 
          eget massa sollicitudin elit ut in mi ut faucibus amet fermentum lorem placerat magna non ipsum.
          </p>
          <div className="flex mt-7 gap-30 text-stone-600">
            <div className="leading-10" >
              <h1 className="flex items-center gap-4"><BsFillBoxFill />16 M² space</h1>
              <h1 className="flex items-center gap-4" ><FaBed />Queen size bed</h1>
            </div>
            <div className="leading-10">
              <h1 className="flex items-center gap-4"><BiWifi2 />Free wifi</h1>
              <h1 className="flex items-center gap-4"><FaConciergeBell />Free breakfast</h1>
            </div>
            <div>
              <h1 className="flex items-center gap-4"><FaRegSnowflake />Air conditioner</h1>
            </div>
          </div>
          <button className='text-[#c29a5c] mt-8 gap-4 flex items-center  text-[15px] font-serif uppercase'>Book now<BsArrowRight /></button>

        </div>
      </div>

      <div className="flex justify-center  mt-20 gap-15">
        <div>
          <img className="w-[700px]" src={hotel29} alt="" />
          <h1 className="text-[30px] mt-7 font-serif font-semibold ">
          Executive Suite
          </h1>
          <p className="text-stone-600 mt-2">
             Scelerisque arcu interdum in hendrerit curabitur ultrices ornare at vitae, vitae, neque suspendisse  <br /> 
             suspendisse leo, placerat amet pretium aliquam molestie pellentesque non viverra arcu a vitae,<br /> 
             commodo nec sit.
          </p>
          <div className="flex mt-7 gap-30 text-stone-600 ">
            <div className="leading-10">
              <h1 className="flex items-center gap-4"><BsFillBoxFill />16 M² space</h1>
              <h1 className="flex items-center gap-4" ><FaBed />Queen size bed</h1>
            </div>
            <div className="leading-10">
              <h1 className="flex items-center gap-4"><FaRegSnowflake />Air conditioner</h1>
              <h1 className="flex items-center gap-4"><FaConciergeBell />Free breakfast</h1>
            </div>
            
          </div>
          <button className='text-[#c29a5c] mt-8 gap-4  flex items-center  text-[15px] font-serif uppercase'>Book now<BsArrowRight /></button>

        </div>

        <div >
          <img className="w-[700px]" src={hotel30} alt="" />
          <h1 className="text-[30px] mt-7 font-serif font-semibold ">
          Deluxe Executive Room
          </h1>
          <p className="text-stone-600 mt-2">
          Vestibulum tortor ornare ornare morbi dolor cursus id eget pellentesque mauris a sed at purus turpis <br /> 
          eget massa sollicitudin elit ut in mi ut faucibus amet fermentum lorem placerat magna non ipsum.
          </p>
          <div className="flex mt-7 gap-30 text-stone-600">
            <div className="leading-10" >
              <h1 className="flex items-center gap-4"><BsFillBoxFill />16 M² space</h1>
              <h1 className="flex items-center gap-4" ><FaBed />Queen size bed</h1>
            </div>
            <div className="leading-10">
              <h1 className="flex items-center gap-4"><BiWifi2 />Free wifi</h1>
              <h1 className="flex items-center gap-4"><FaConciergeBell />Free breakfast</h1>
            </div>
            <div>
              <h1 className="flex items-center gap-4"><FaRegSnowflake />Air conditioner</h1>
            </div>
          </div>
          <button className='text-[#c29a5c] mt-8 gap-4 flex items-center  text-[15px] font-serif uppercase'>Book now<BsArrowRight /></button>

        </div>
      </div>

      <div className="flex justify-center  mt-20 gap-15">
        <div>
          <img className="w-[700px]" src={hotel31} alt="" />
          <h1 className="text-[30px] mt-7 font-serif font-semibold ">
          Royal Suite
          </h1>
          <p className="text-stone-600 mt-2">
             Scelerisque arcu interdum in hendrerit curabitur ultrices ornare at vitae, vitae, neque suspendisse  <br /> 
             suspendisse leo, placerat amet pretium aliquam molestie pellentesque non viverra arcu a vitae,<br /> 
             commodo nec sit.
          </p>
          <div className="flex mt-7 gap-30 text-stone-600 ">
            <div className="leading-10">
              <h1 className="flex items-center gap-4"><BsFillBoxFill />16 M² space</h1>
              <h1 className="flex items-center gap-4" ><FaBed />Queen size bed</h1>
            </div>
            <div className="leading-10">
              <h1 className="flex items-center gap-4"><FaRegSnowflake />Air conditioner</h1>
              <h1 className="flex items-center gap-4"><FaConciergeBell />Free breakfast</h1>
            </div>
            
          </div>
          <button className='text-[#c29a5c] mt-8 gap-4  flex items-center  text-[15px] font-serif uppercase'>Book now<BsArrowRight /></button>

        </div>

        <div >
          <img className="w-[700px]" src={hotel32} alt="" />
          <h1 className="text-[30px] mt-7 font-serif font-semibold ">
          Heritage Suite
          </h1>
          <p className="text-stone-600 mt-2">
          Vestibulum tortor ornare ornare morbi dolor cursus id eget pellentesque mauris a sed at purus turpis <br /> 
          eget massa sollicitudin elit ut in mi ut faucibus amet fermentum lorem placerat magna non ipsum.
          </p>
          <div className="flex mt-7 gap-30 text-stone-600">
            <div className="leading-10" >
              <h1 className="flex items-center gap-4"><BsFillBoxFill />16 M² space</h1>
              <h1 className="flex items-center gap-4" ><FaBed />Queen size bed</h1>
            </div>
            <div className="leading-10">
              <h1 className="flex items-center gap-4"><BiWifi2 />Free wifi</h1>
              <h1 className="flex items-center gap-4"><FaConciergeBell />Free breakfast</h1>
            </div>
            <div>
              <h1 className="flex items-center gap-4"><FaRegSnowflake />Air conditioner</h1>
            </div>
          </div>
          <button className='text-[#c29a5c] mt-8 gap-4 flex items-center  text-[15px] font-serif uppercase'>Book now<BsArrowRight /></button>

        </div>
      </div>



    </div>
  )
}

export default Rooms
