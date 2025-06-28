import { FaQuoteLeft } from "react-icons/fa"; 
import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai"; 
import { BsFacebook } from "react-icons/bs"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import Logo from '../assets/site-logo.svg'
import Logo1 from '../assets/site-logo-gold.svg'
import Logo2 from '../assets/divider.svg'
import hotelbg from '../img/hotel-bg.png'
import { Link } from "react-router-dom";
import hotel22 from '../img/hotel22.jpg'
import hotel23 from '../img/hotel23.jpg'
import hotel24 from '../img/hotel24.jpg'
import hotel25 from '../img/hotel25.jpg'
import hotel26 from '../img/hotel26.jpg'

const History = () => {
  return (
    <div className="bg-[#f6ebed] ">
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
          <li><Link className="text-white  " to="/history"> History</Link></li>
          <li><Link className="text-stone-200 " to="/experience">Experience</Link></li>
          <li><Link className="text-stone-200 " to="/rooms">Rooms & Suites</Link></li>
          <li><Link className="text-stone-200  " to="/dining">Dining</Link></li>
          <li><Link className="text-stone-200  " to="/gallery">Gallery</Link></li>
          <li><Link className="text-stone-200  " to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
      <div>
       
        <h1 className="text-center text-white mt-14 font-serif text-[120px]">History</h1>
      </div>

     </div>

        <h1 className="pt-30 text-center font-serif text-[22px]">Our Story</h1>
        <h1 className= " text-[#c29a5c] text-center text-[55px] mt-5 font-serif">
        Treat yourself to the exquisitely ullamcorper <br />
         lectus consectetur id tristique condimentum <br /> 
         eget libero heritage hotel in Jaipur.
        </h1>
        <div className="flex justify-center mt-5 ">
           <img   src={Logo2} alt="" />
        </div>
        <div className="flex justify-center flex-col items-center">
        <p className=" mt-6 text-stone-600">
          Phasellus vitae volutpat donec at felis mauris tincidunt elit 
          vel eu aenean commodo, tincidunt <br /> elementum et dictum scelerisque 
          tempus amet eget viverra lectus tristique 
         suspendisse tortor <br /> feugiat eu lacinia sed elementum in 
         iaculis sapien cursus odio massa gravida ut molestie sed vel <br /> senectus donec nunc nunc nec laoreet.
        </p>
        <p className="mt-6 text-stone-600">Amet orci arcu, dictum in ut congue molestie convallis etiam convallis sed dictumst neque,
           in <br /> sapien diam dignissim est phasellus velit adipiscing viverra faucibus sociis etiam  
           consequat <br /> congue tellus sit tempus tortor, interdum quis amet augue netus enim integer in urna,
            a eu, risus <br /> sit pretium, semper feugiat elit neque, leo venenatis blandit malesuada
             enim est sapien <br /> fermentum mauris in lectus bibendum phasellus urna.
        </p>
        </div>
     
      
      <div className='flex justify-center items-center mt-20 gap-15'>
          <div>
            <img className='h-[230px]' src={hotel22} alt="" />
            <img className='h-[230px] mt-6' src={hotel23} alt="" />
          </div>
          <div>
            <img className='h-[600px]' src={hotel24} alt="" />
          </div>
          <div>
            <img className='h-[485px]' src={hotel25} alt="" />
          </div>
      </div>

      <div className='flex justify-center mt-20'>
        <p className='text-stone-600'>
           Dictum egestas eleifend pulvinar imperdiet sit venenatis porttitor egestas ut auctor purus <br /> 
           suspendisse in arcu condimentum risus at phasellus nulla aenean tristique dui quis blandit <br /> 
           tellus sed pellentesque eu arcu, vestibulum donec.
        </p>
      </div>
      <div className='flex justify-center mt-5'>
        <p className='text-stone-600'>
           Nisl adipiscing blandit pulvinar faucibus faucibus feugiat tincidunt gravida elit elementum, <br /> 
           proin nisl nunc, urna, ac dictum tellus quis faucibus curabitur morbi dui in.
        </p>
      </div>


      <div className="flex justify-center items-center mt-15 gap-30">
          <div>
            <img className="h-[550px]" src={hotel26} alt="" />
          </div>
          <div>
            <p className="text-stone-600">              
              Euismod cras habitant dictum turpis interdum non <br /> 
              scelerisque in tincidunt diam fringilla sapien, cursus <br /> 
              velit rutrum est nulla lectus molestie magna enim in sed <br /> 
              pharetra est pretium nisl lacus lobortis nam scelerisque <br /> 
              augue cursus eget pellentesque in semper netus <br /> 
              convallis arcu lorem amet curabitur phasellus <br /> 
              suspendisse.
            </p>
            <p className="text-stone-600 mt-6">
              Amet diam scelerisque adipiscing elementum mauris <br /> 
              velit vitae sem urna diam sollicitudin lacus posuere arcu <br /> 
              sem sit ultrices enim et sed dolor risus.
            </p>
            <div className="flex mt-10 gap-4 ">
               <div className="text-[#c29a5c] text-[25px]">
                < FaQuoteLeft />
               </div>
              <div>
                <p>
                  Volutpat diam proin at phasellus faucibus enim <br /> 
                  at viverra urna pretium elit egestas in magna <br /> 
                  turpis ut ac ut sit sit arcu nulla feugiat justo, <br /> 
                  facilisis luctus mattis adipiscing sed ut.
                </p>
                <p className="text-stone-600 mt-3">
                  Owner of Raj Vilas Palace
                </p> 
              </div>
            </div>
            <p className="text-stone-600 mt-10">
                Velit vitae sem urna diam sollicitudin lacus posuere arcu <br /> 
                sem sit ultrices enim et sed dolor risus.
            </p>
          </div>
      </div>
      
    
      
    </div>
  )
}

export default History
