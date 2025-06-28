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
import hotel1 from '../img/hotel1.png'
import hotel2 from '../img/hotel2.png'
import hotel3 from '../img/hotel3.png'
import hotel4 from '../img/hotel4.png'

const Experience = () => {
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
          <li><Link className="text-stone-200  " to="/history"> History</Link></li>
          <li><Link className="text-white " to="/experience">Experience</Link></li>
          <li><Link className="text-stone-200 " to="/rooms">Rooms & Suites</Link></li>
          <li><Link className="text-stone-200  " to="/dining">Dining</Link></li>
          <li><Link className="text-stone-200  " to="/gallery">Gallery</Link></li>
          <li><Link className="text-stone-200  " to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
      <div>
       
        <h1 className="text-center text-white mt-14 font-serif text-[120px]">Experience</h1>
      </div>
   </div>


        <h1 className= " text-[#c29a5c] text-center text-[55px] mt-30 font-serif">
            Nothing about your stay at Raj Vilas Palace, <br /> 
            Jaipur would be like your everyday life. You’ve <br /> 
            got to ullamcorper lectus consectetur id <br /> 
            tristique eget libero.
        </h1>
        <div className="flex justify-center mt-5 ">
           <img   src={Logo2} alt="" />
        </div>

          <div className="mt-20">
            <div className="flex justify-center">
              <img className="h-[700px]" src={hotel1} alt="" />
            </div>
            <div className="flex justify-center gap-20 mt-8 " >
              <div className="text-[#c29a5c] font-serif">
                <h1>
                    01/04
                </h1>
                <h1 className="text-[50px] mt-4">
                   Immersive <br />  View        
                </h1>
              </div>
              <div>
                <p className="font-bold">Egestas risus tempor cras posuere viverra pellentesque sodales.</p>
                <p className="text-stone-600 mt-8">
                Ultricies non suspendisse eget et vitae elit tincidunt elit sed velit sit vitae quam <br /> 
                pellentesque id dolor amet integer congue non non integer morbi  integer felis morbi <br /> 
                imperdiet cras ut sed porttitor id donec duis at est, justo pulvinar aliquam donec <br /> 
                posuere pharetra eu, magna fusce sit massa, est eu, id purus nam integer sapien.
                </p>
                <button className='text-[#c29a5c] flex items-center gap-4 mt-8 text-[15px] font-serif uppercase'>Explore<BsArrowRight /></button>
              </div>
            </div>
          </div>


          <div className="mt-25">
            <div className="flex justify-center">
              <img className="h-[700px]" src={hotel2} alt="" />
            </div>
            <div className="flex justify-center gap-20 mt-8 " >
              <div className="text-[#c29a5c] font-serif">
                <h1>
                    02/04
                </h1>
                <h1 className="text-[50px] mt-4">
                Exquisite <br />  Suite        
                </h1>
              </div>
              <div>
                <p className="font-bold">Erat ullamcorper porttitor malesuada sed imperdiet lectus egestas lectus vel at <br /> pharetra semper cras eget.</p>
                <p className="text-stone-600 mt-8">
                Est tincidunt vulputate ornare posuere pulvinar pulvinar aliquet feugiat tincidunt eget <br /> 
                imperdiet elit a non sit posuere risus enim ultrices purus tellus lectus pharetra auctor <br /> 
                vestibulum sagittis lobortis mattis eleifend.
                </p>
                <button className='text-[#c29a5c] flex items-center gap-4 mt-8 text-[15px] font-serif uppercase'>Explore<BsArrowRight /></button>
              </div>
            </div>
          </div>


          <div className="mt-35">
            <div className="flex justify-center gap-20  " >
              <div className="text-[#c29a5c] font-serif">
                <h1>
                    03/04
                </h1>
                <h1 className="text-[50px] mt-4">
                Dine Under <br /> the Stars      
                </h1>
              </div>
              <div>
                <p className="text-stone-600 ">
                Elit congue ac libero bibendum cursus blandit quis libero lacinia morbi sed gravida <br /> 
                sed lectus in id pharetra enim odio faucibus sed amet at ornare bibendum senectus <br /> 
                eleifend lectus felis non ullamcorper sit interdum aliquet vitae et augue magna.
                </p>
                <p className="font-bold mt-8">Sed in vulputate cursus volutpat, morbi ornare ac, integer neque, urna gravida <br /> volutpat nec scelerisque.</p>
                <button className='text-[#c29a5c] flex items-center gap-4 mt-8 text-[15px] font-serif uppercase'>Explore<BsArrowRight /></button>
              </div>
            </div>
            <div className="flex justify-center mt-25">
              <img className="h-[700px]" src={hotel4} alt="" />
            </div>
          </div>

          
          <div className="mt-10">
            <div className="flex justify-center">
              <img className="h-[700px]" src={hotel3} alt="" />
            </div>
            <div className="flex justify-center gap-20 mt-8 " >
              <div className="text-[#c29a5c] font-serif">
                <h1>
                    04/04
                </h1>
                <h1 className="text-[50px] mt-4">
                Traditional <br />Touch        
                </h1>
              </div>
              <div>
                <p className="font-bold">Egestas risus tempor cras posuere viverra pellentesque sodales.</p>
                <p className="text-stone-600 mt-8">
                  Sed in vulputate cursus volutpat, morbi ornare ac, integer neque, urna gravida <br /> 
                  volutpat nec scelerisque. Elit congue ac libero bibendum cursus blandit quis libero <br /> 
                  lacinia morbi sed gravida sed lectus in id pharetra enim odio faucibus sed amet at <br /> 
                  ornare bibendum senectus eleifend lectus felis non ullamcorper sit interdum aliquet <br /> 
                  vitae et augue magna placerat pellentesque elit arcu tempus mauris pellentesque <br /> 
                  urna proin.
                </p>
                <button className='text-[#c29a5c] flex items-center gap-4 mt-8 text-[15px] font-serif uppercase'>Explore<BsArrowRight /></button>
              </div>
            </div>
          </div>

      



    </div>
  )
}

export default Experience
