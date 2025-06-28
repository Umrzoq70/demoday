import { AiFillYoutube } from "react-icons/ai"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import { FaTripadvisor } from "react-icons/fa"; 
import { FaGoogle } from "react-icons/fa"; 
import { BsInstagram } from "react-icons/bs"; 
import { BsFacebook } from "react-icons/bs"; 
import Logo from '../../assets/site-logo-black.svg'


import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#f6ebed] flex justify-center">
      <div>
      <div className="flex justify-center items-center pt-30  gap-20 border-b-2 border-stone-300 pb-15 w-[1300px] ">
          <div className="flex justify-center  pt-30 gap-5">
            <div className="text-[#c29a5c] text-[50px] pt-4">
             <FaGoogle />
            </div>
            <div>
              <h1 className="font-serif text-[50px]">4.8</h1>
              <h1 className="uppercase font-serif text-stone-600">Google Rating</h1>
              <p className="mt-5">Based on 2345 reviews</p>
            </div>
          </div>  

          <div className="flex pt-30 gap-5">
            <div className="text-[#c29a5c] text-[60px] pt-3 ">
            <FaTripadvisor />
            </div>
            <div>
              <h1 className="font-serif text-[50px]">4.7</h1>
              <h1 className="uppercase font-serif text-stone-600">Tripadvisor Rating</h1>
              <p className="mt-5">Based on 2345 reviews</p>
            </div>
          </div>

          <div className="flex pt-30 gap-5">
            <div className="text-[#c29a5c] text-[50px] pt-3">
            <BsFacebook />
            </div>
            <div>
              <h1 className="font-serif text-[50px]">1M+</h1>
              <h1 className="uppercase font-serif text-stone-600">Facebook Likes</h1>
              <p className="mt-5">Based on 2345 reviews</p>
            </div>
          </div>

          <div className="flex pt-30 gap-5">
            <div className="text-[#c29a5c] text-[50px] pt-3">
             <BsInstagram />
            </div>
            <div>
              <h1 className="font-serif text-[50px]">2M+</h1>
              <h1 className="uppercase font-serif text-stone-600">Followers</h1>
              <p className="mt-5">Based on 2345 reviews</p>
            </div>
          </div>
      </div>

      <div className="pt-22">
        <div className=" flex justify-center">
          <img src={Logo} alt="" />
        </div>
        <div className=" border-b-1 pb-7">
          <ul className="flex justify-center gap-10 mt-13">
            <li><a href="">Home</a></li>
            <li><a href="">History</a></li>
            <li><a href="">Experience</a></li>
            <li><a href="">Rooms & Suites</a></li>
            <li><a href="">Dining</a></li>
            <li><a href="">Gallery</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center gap-96 pt-15 pb-15">
        <h1 className="text-stone-600">© 2025 Heritage Hotel</h1>
        <div className="flex justify-center items-center gap-8">
          <a href="">  <BsInstagram /></a>
          <a href=""> <BsFacebook /></a>
          <a className="text-red-600" href=""><AiFillYoutube /></a>
          <a href=""><AiOutlineTwitter /></a>
        </div>
        <h1 className="text-stone-600">Powered by Heritage Hotel</h1>
      </div>
      </div>
    </div>
  )
}

export default Footer
