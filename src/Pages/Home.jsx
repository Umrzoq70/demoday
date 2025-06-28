import { BsArrowRight } from "react-icons/bs"; 
import React  from 'react'
import Logo2 from '../assets/divider.svg'
import hotel1 from '../img/hotel1.png'
import hotel2 from '../img/hotel2.png'
import hotel3 from '../img/hotel3.png'
import hotel4 from '../img/hotel4.png'
import hotel5 from '../img/hotel5.jpg'
import hotel6 from '../img/hotel6.jpg'
import hotel7 from '../img/hotel7.jpg'
import hotel8 from '../img/hotel8.avif'
import hotel9 from '../img/hotel9.png'
import hotel10 from '../img/hotel10.jpg'
import hotel11 from '../img/hotel11.jpg'
import hotel12 from '../img/hotel12.jpg'
import hotel13 from '../img/hotel13.jpg'
import Carousel from '../Components/Carousel/Carousel';
import hotel18 from '../img/hotel18.jpg'
import hotel19 from '../img/hotel19.jpg'
import hotel20 from '../img/hotel20.jpg'
import hotel21 from '../img/hotel21.jpg'
import Footer from '../Components/Footeer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import { Parallax } from 'react-scroll-parallax';

const Home = () => {
 
  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <div className="bg-[#f6ebed] ">
        <h1 className="pt-50 text-center font-serif text-[22px]">About Us</h1>
        <h1 className= " text-[#c29a5c] text-center text-[55px] mt-5 font-serif">
        Treat yourself to the exquisitely ullamcorper <br />
         lectus consectetur id tristique condimentum <br /> 
         eget libero heritage hotel in Jaipur.
        </h1>
        <div className="flex justify-center mt-5 ">
           <img   src={Logo2} alt="" />
        </div>
        <div className="flex justify-center flex-col items-center">
        <p className=" mt-6">
          Phasellus vitae volutpat donec at felis mauris tincidunt elit 
          vel eu aenean commodo, tincidunt elementum et dictum scelerisque 
          tempus amet eget viverra lectus tristique <br />
         suspendisse tortor feugiat eu lacinia sed elementum in 
         iaculis sapien cursus odio massa gravida ut molestie sed vel senectus donec nunc nunc nec laoreet.
        </p>
        <p className="mt-6">Amet orci arcu, dictum in ut congue molestie convallis etiam convallis sed dictumst neque,
           in sapien diam dignissim est phasellus velit adipiscing viverra faucibus sociis etiam  <br /> 
           consequat congue tellus sit tempus tortor, interdum quis amet augue netus enim integer in urna,
            a eu, risus sit pretium, semper feugiat elit neque, leo venenatis blandit malesuada <br />
             enim est sapien fermentum mauris in lectus bibendum phasellus urna.
        </p>
        <div className="mt-10"><button className= "hover:bg-[#c29a5c] hover:text-white transition duration-500 uppercase text-[14px] text-[#c29a5c] cursor-pointer  font-serif border h-[45px] w-[210px]">Discover More</button></div>

        </div>

        <div className='flex justify-center items-center  mt-40 '>
          <div className=''>
           <img className='w-[772px] h-[570px] relative right-[150px]'  src={hotel1} alt="" />
          </div>
          <div className='relative right-[40px]'>
            <h1 className='text-[#c29a5c] font-serif'>01</h1>
            <h1 className='text-[#c29a5c] font-serif mt-13 text-[45px]'>Immersive View</h1>
            <h1 className='mt-5'>Egestas risus tempor cras posuere viverra pellentesque sodales.</h1>
            <p className='text-stone-600 mt-5'>
             Ultricies non suspendisse eget et vitae elit tincidunt elit sed velit sit <br />
             vitae quam pellentesque id dolor amet integer congue non non <br /> 
             integer morbi integer felis morbi imperdiet cras ut sed porttitor id <br /> 
             donec duis at est, justo pulvinar aliquam donec posuere pharetra <br /> 
             eu, magna fusce sit massa, est eu, id purus nam integer sapien.
            </p>
            <button className= 'hover:text-black transition duration-500 text-[#c29a5c] cursor-pointer flex items-center gap-4 mt-8 text-[20px] font-serif'>View Rooms<BsArrowRight /></button>
          </div>

        </div>
        <div className='flex justify-center items-center  '>
         
          <div className='relative right-[10px]'>
            <h1 className='text-[#c29a5c] font-serif'>02</h1>
            <h1 className='text-[#c29a5c] font-serif mt-13 text-[45px]'>Exquisite Suite</h1>
            <h1 className='mt-5'>Erat ullamcorper porttitor malesuada sed imperdiet lectus <br />egestas lectus vel at pharetra semper cras eget.</h1>
            <p className='text-stone-600 mt-5'>
            Est tincidunt vulputate ornare posuere pulvinar pulvinar aliquet <br /> 
            feugiat tincidunt eget imperdiet elit a non sit posuere risus enim <br /> 
            ultrices purus tellus lectus pharetra auctor vestibulum sagittis <br /> 
            lobortis mattis eleifend.
            </p>
            <button className='hover:text-black transition duration-500 text-[#c29a5c] cursor-pointer flex items-center gap-4 mt-8 text-[20px] font-serif'>View Rooms<BsArrowRight /></button>
          </div>
          <div className=' relative left-[154px]'>
           <img className='w-[760px] h-[570px] relative '  src={hotel2} alt="" />
          </div>

        </div>

        <div className='flex justify-center items-center   '>
          <div className=''>
           <img className='w-[772px] h-[570px] relative right-[150px]'  src={hotel3} alt="" />
          </div>
          <div className='relative right-[40px]'>
            <h1 className='text-[#c29a5c] font-serif'>03</h1>
            <h1 className='text-[#c29a5c] font-serif mt-13 text-[45px]'>Dine Under the Stars</h1>
            <h1 className='mt-5'>Egestas risus tempor cras posuere viverra pellentesque sodales.</h1>
            <p className='text-stone-600 mt-5'>
             Ultricies non suspendisse eget et vitae elit tincidunt elit sed velit sit <br />
             vitae quam pellentesque id dolor amet integer congue non non <br /> 
             integer morbi integer felis morbi imperdiet cras ut sed porttitor id <br /> 
             donec duis at est, justo pulvinar aliquam donec posuere pharetra <br /> 
             eu, magna fusce sit massa, est eu, id purus nam integer sapien.
            </p>
            <button className='hover:text-black transition duration-500 text-[#c29a5c] cursor-pointer flex items-center gap-4 mt-8 text-[20px] font-serif'>View Rooms <BsArrowRight /></button>
          </div>

        </div>
        <div className='flex justify-center items-center  '>
         
         <div className='relative right-[10px]'>
           <h1 className='text-[#c29a5c] font-serif'>04</h1>
           <h1 className='text-[#c29a5c] font-serif mt-13 text-[45px]'>Traditional Touch</h1>
           <h1 className='mt-5'>Erat ullamcorper porttitor malesuada sed imperdiet lectus <br />egestas lectus vel at pharetra semper cras eget.</h1>
           <p className='text-stone-600 mt-5'>
           Est tincidunt vulputate ornare posuere pulvinar pulvinar aliquet <br /> 
           feugiat tincidunt eget imperdiet elit a non sit posuere risus enim <br /> 
           ultrices purus tellus lectus pharetra auctor vestibulum sagittis <br /> 
           lobortis mattis eleifend.
           </p>
           <button className='hover:text-black transition duration-500 text-[#c29a5c] cursor-pointer flex items-center gap-4 mt-8 text-[20px] font-serif'>View Rooms <BsArrowRight /></button>
         </div>
         <div className=' relative left-[154px]'>
          <img className='w-[760px] h-[570px] relative '  src={hotel4} alt="" />
         </div>

       </div>

        <div>
          <h1 className='text-center  font-serif mt-30 text-[20px]'>Raj Vilas Palace</h1>
          <h1 className='text-center  text-[#c29a5c] font-serif text-[60px] mt-5'>Rooms & Suites</h1>
          <p className='text-center  text-stone-600 mt-5'>Phasellus vitae volutpat donec at felis mauris tincidunt elit vel eu aenean commodo, tincidunt elementum et  dictum <br />
           scelerisque tempus amet eget viverra lectus tristique suspendisse tortor feugiat eu lacinia sed elementum in iaculis <br />
            sapien cursus odio massa gravida ut molestie sed vel senectus donec nunc nunc nec laoreet.</p>
        </div>
        
        <div className=' flex justify-center items-center mt-24 gap-5'>
          <div className='w-1/3 '>
            <div className='h-[400px]  bg-cover bg-center relative '
           style={{  backgroundImage: `url(${hotel7})` }}>
              <h1 className=' text-white flex justify-center text-[35px] font-serif pt-72' >Deluxe Room</h1>
              <div className='flex justify-center '>
              <button className='hover:text-white transition duration-500 text-[#c29a5c] cursor-pointer flex items-center gap-4  text-[20px] font-serif '>View Rooms <BsArrowRight /></button>
              </div>
            </div>
            <div className='h-[400px] bg-cover bg-center relative mt-5'
           style={{  backgroundImage: `url(${hotel8})` }}>
            <h1 className=' text-white flex justify-center text-[35px] font-serif pt-72'>Deluxe Suite</h1>
            <div className='flex justify-center '>
              <button className='hover:text-white transition duration-500 text-[#c29a5c] cursor-pointer flex items-center gap-4  text-[20px] font-serif '>View Rooms <BsArrowRight /></button>
              </div>
            </div>
          </div>
          <div className='h-[818px] w-1/3 bg-cover bg-center relative'
           style={{  backgroundImage: `url(${hotel6})` }}>
            <h1 className=' text-white flex justify-center text-[35px] font-serif  mt-[700px]'>Royal Suite</h1>
            <div className='flex justify-center '>
              <button className='hover:text-white transition duration-500 text-[#c29a5c] cursor-pointer flex items-center gap-4  text-[20px] font-serif '>View Rooms <BsArrowRight /></button>
              </div>
          </div>
          <div className='h-[818px] w-1/3 bg-cover bg-center relative'
           style={{  backgroundImage: `url(${hotel5})` }} >
              <h1 className=' text-white flex justify-center text-[35px] font-serif  mt-[700px]'>Heritage Suite</h1>
              <div className='flex justify-center '>
              <button className='hover:text-white transition duration-500 text-[#c29a5c] cursor-pointer flex items-center gap-4  text-[20px] font-serif '>View Rooms <BsArrowRight /></button>
              </div>
            
          </div>
        </div>

        <div>
        <h1 className="pt-35 text-center font-serif text-[22px]">Dining Experience</h1>
        <h1 className= " text-[#c29a5c] text-center text-[55px] mt-5 font-serif">
        Delicious cuisines and a unique setting <br /> to inspire a special occasion.
        </h1>
        <div className="flex justify-center mt-5 ">
           <img   src={Logo2} alt="" />
        </div>
        </div>
        <div className='flex justify-center items-center gap-50 mt-15'>
          <h1 className='text-[40px] font-serif'>Specially crafted meal,<br />  served by a personal <br /> butler.</h1>
          <div>
            <p className='text-stone-600 '>
             Phasellus vitae volutpat donec at felis mauris tincidunt elit vel eu aenean commodo, <br />
             tincidunt elementum et dictum scelerisque tempus amet eget viverra lectus tristique <br /> 
             suspendisse tortor feugiat eu lacinia sed elementum in iaculis sapien cursus odio massa <br /> 
             gravida ut molestie sed vel senectus donec nunc nunc nec laoreet.
             </p>
             <div className="mt-10"><button className= "hover:bg-[#c29a5c] hover:text-white transition duration-500 uppercase text-[14px] text-[#c29a5c] cursor-pointer font-serif border h-[45px] w-[210px]">Discover More</button></div>

          </div>
        </div>
        <div className='flex justify-center items-center mt-30'>
          <img src={hotel9} alt="" />
        </div>
          
        
        
        <div className='flex justify-center items-center mt-30 gap-[300px]'>
          <h1 className='text-[60px] text-[#c29a5c] font-serif'>Amenities</h1>
          <p className='text-stone-600 '>
          Phasellus vitae volutpat donec at felis mauris tincidunt elit vel eu aenean commodo,<br /> 
          tincidunt elementum et dictum scelerisque tempus amet eget viverra lectus tristique <br /> 
          suspendisse tortor feugiat eu lacinia sed elementum in iaculis sapien cursus odio massa <br /> 
          gravida ut molestie sed vel senectus donec nunc nunc nec laoreet.
          </p>
        </div>
        <div className='flex justify-center mt-25 gap-20'>
          <div className='flex justify-center items-center gap-[52px]'>
            <div>
              <img className='w-[370px] h-[500px]' src={hotel10} alt="" />
            </div>
            <div>
               <h1 className='text-[#c29a5c] font-serif text-[35px]'>In-room dining</h1>
               <p className='text-stone-600 mt-7 '>
               Egestas platea hac pharetra lacus <br /> 
               risus nibh et id amet elementum in <br /> 
               suscipit egestas ipsum sollicitudin <br /> 
               eget vitae quam diam senectus ac <br /> 
               pharetra at congue diam nulla viverra <br /> 
               sapien laoreet.
               </p>
               <div className='flex '>
              <button className='hover:text-black transition duration-500 text-[#c29a5c] cursor-pointer flex items-center gap-4  text-[18px] font-serif mt-6'>Learn more<BsArrowRight /></button>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center gap-[53px]'>
            <div>
              <img className='w-[380px] h-[500px]' src={hotel11} alt="" />
            </div>
            <div className='mr-15'>
               <h1 className='text-[#c29a5c] font-serif text-[35px]'>Sutra Cafe</h1>
               <p className='text-stone-600 mt-7 '>
               Egestas platea hac pharetra lacus <br /> 
               risus nibh et id amet elementum in <br /> 
               suscipit egestas ipsum sollicitudin <br /> 
               eget vitae quam diam senectus ac <br /> 
               pharetra at congue diam nulla viverra <br /> 
               sapien laoreet.
               </p>
               <div className='flex '>
              <button className= 'hover:text-black transition duration-500 text-[#c29a5c] cursor-pointer flex items-center gap-4  text-[18px] font-serif mt-6 '>Learn more <BsArrowRight /></button>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center  gap-20'>
          <div className='flex justify-center items-center gap-[52px]'>
          <div className='ml-15'>
               <h1 className='text-[#c29a5c] font-serif text-[35px]'>Private Dining</h1>
               <p className='text-stone-600 mt-7 '>
               Egestas platea hac pharetra lacus <br /> 
               risus nibh et id amet elementum in <br /> 
               suscipit egestas ipsum sollicitudin <br /> 
               eget vitae quam diam senectus ac <br /> 
               pharetra at congue diam nulla viverra <br /> 
               sapien laoreet.
               </p>
               <div className='flex '>
              <button className='hover:text-black transition duration-500 text-[#c29a5c] cursor-pointer flex items-center gap-4  text-[18px] font-serif mt-6'>Learn more <BsArrowRight /></button>
              </div>
            </div>
            <div>
              <img className='w-[380px] h-[500px]' src={hotel12} alt="" />
            </div>
            
          </div>
          <div className='flex justify-center items-center gap-[53px]'>
          <div className=''>
               <h1 className='text-[#c29a5c] font-serif text-[35px]'>Jalu Restaurant</h1>
               <p className='text-stone-600 mt-7 '>
               Egestas platea hac pharetra lacus <br /> 
               risus nibh et id amet elementum in  <br /> 
               suscipit egestas ipsum sollicitudin <br /> 
               eget vitae quam diam senectus ac <br /> 
               pharetra at congue diam nulla viverra <br /> 
               sapien laoreet.
               </p>
               <div className='flex '>
              <button className='hover:text-black transition duration-500 text-[#c29a5c] cursor-pointer flex items-center gap-4  text-[18px] font-serif mt-6 '>Learn more <BsArrowRight /></button>
              </div>
            </div>
            <div>
              <img className='w-[370px] h-[500px]' src={hotel13} alt="" />
            </div>
            
          </div>
        </div>
        <div>
          <Carousel/>
        </div>


        <div>
          <h1 className='text-center  font-serif mt-30 text-[20px]'>Local Attraction</h1>
          <h1 className='text-center  text-[#c29a5c] font-serif text-[60px] mt-5'>Place of Interest</h1>
          <p className='text-center  text-stone-600 mt-5'>Phasellus vitae volutpat donec at felis mauris tincidunt elit vel eu aenean commodo, tincidunt elementum et  dictum <br />
           scelerisque tempus amet eget viverra lectus tristique suspendisse tortor feugiat eu lacinia sed elementum in iaculis <br />
            sapien cursus odio massa gravida ut molestie sed vel senectus donec nunc nunc nec laoreet.</p>
        </div>

        <div className='mt-20 flex justify-center gap-5'>
            <div>
              <img src={hotel18} alt="" />
              <h1 className='text-[#c29a5c] font-serif text-[30px] mt-4 text-center '>Taj Mahal</h1>
            </div>

            <div>
              <img src={hotel19} alt="" />
              <h1 className='text-[#c29a5c] font-serif text-[30px] mt-4 text-center'>The City Palace</h1>
            </div>

            <div>
              <img src={hotel20} alt="" />
              <h1 className='text-[#c29a5c] font-serif text-[30px] mt-4 text-center '>Albert Hall Museum</h1>
            </div>

            <div>
              <img src={hotel21} alt="" />
              <h1 className='text-[#c29a5c] font-serif text-[30px] mt-4 text-center '>Amer Fort</h1>
            </div>
        </div>






      </div>
    </div>
  )
}

export default Home
