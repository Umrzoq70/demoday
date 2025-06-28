import { MdLocationPin } from "react-icons/md"; 
import React , {useState} from 'react'
import { AiOutlineInstagram } from "react-icons/ai"; 
import { BsFacebook } from "react-icons/bs"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import Logo from '../assets/site-logo.svg'
import Logo1 from '../assets/site-logo-gold.svg'
import hotelbg from '../img/hotel-bg.png'
import { Link } from "react-router-dom";
import Logo2 from '../assets/divider.svg'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const Contact = () => {
  const position = [41.3111, 69.2797]; 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = 'required';
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      setSubmitted(true);
    } else {
      alert("Iltimos, barcha maydonlarni to‘ldiring!");
    }
  };
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
          <li><Link className="text-stone-200 " to="/experience">Experience</Link></li>
          <li><Link className="text-stone-200 " to="/rooms">Rooms & Suites</Link></li>
          <li><Link className="text-stone-200  " to="/dining">Dining</Link></li>
          <li><Link className="text-stone-200  " to="/gallery">Gallery</Link></li>
          <li><Link className="text-white " to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
      <div>
       
        <h1 className="text-center text-white mt-14 font-serif text-[120px]">Contact</h1>
      </div>
      </div>

     
        <h1 className="flex justify-center mt-20 text-[#c29a5c] text-[50px]" ><MdLocationPin /></h1>
        <h1 className=" text-center font-serif mt-5 text-[22px]">Location</h1>
        <h1 className="text-center font-serif text-[40px]">Raj Vilas Palace, Sansar Chandra Road, <br /> Jaipur 123 456, India.</h1>
        <h1 className="text-center font-serif text-[40px] mt-5">+91-123-456-7890</h1>
        <h1 className="text-center font-serif text-[35px] mt-5">mail@example.com</h1>
        <div className="flex justify-center mt-10 ">
           <img   src={Logo2} alt="" />
        </div>

    
        <div className="max-w-2xl mx-auto p-8   mt-10">
      {submitted ? (
        <p className="text-center  text-xl font-semibold">
          Thanks for contacting us! We will be in touch with you shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="flex gap-4">
            <div className="w-full">
              <h1>Name <a className="text-red-600">*</a></h1>
              <input
                type="text"
                name="firstName"
                placeholder=""
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full p-3 rounded-[4px] border bg-white ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <h1 className="text-[14px] font-normal">First</h1>
            </div>
            <div className="w-full">
              
              <input
                type="text"
                name="lastName"
                placeholder=""
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full p-3 mt-6 rounded-[4px] border bg-white ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <h1 className="text-[14px] font-normal">Last</h1>
            </div>
          </div>

         
         <div>
         <h1>Email <a className="text-red-600">*</a></h1>
         <input
            type="email"
            name="email"
            placeholder=""
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 rounded-[4px] border bg-white ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
         </div>

          <div>
            <h1>Phone <a className="text-red-600">*</a></h1>
          <input
            type="tel"
            name="phone"
            placeholder=""
            value={formData.phone}
            onChange={handleChange}
            className={`w-full p-3 rounded-[4px] border bg-white ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          </div>

          <div>
            <h1>Comment or Message <a className="text-red-600">*</a> </h1>
          <textarea
            name="message"
            placeholder=""
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 rounded-[4px] border bg-white ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          ></textarea>
          </div>

          <button
            type="submit"
            className= " text-[#c29a5c] text-[14px]  font-serif border h-[45px] w-[180px] uppercase cursor-pointer">

              Send Message
          </button>
        </form>
      )}
    </div>

    <div className="h-[440px] mt-20 w-full rounded-md overflow-hidden shadow">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Here we are
          </Popup>
        </Marker>
      </MapContainer>
    </div>
        



    </div>
  )
}

export default Contact
