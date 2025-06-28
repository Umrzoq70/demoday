import { AiOutlineRight } from "react-icons/ai"; 
import { AiOutlineLeft } from "react-icons/ai"; 
import React, { useState } from 'react';
import img1 from '../../img/hotel14.jpg';
import img2 from '../../img/hotel15.jpg';
import img3 from '../../img/hotel16.jpg';
import img4 from '../../img/hotel17.jpg';

const images = [img1, img2, img3, img4];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handleChange = (newIndex) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFade(true); 
    }, 200); 
  };

  const prev = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    handleChange(newIndex);
  };

  const next = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    handleChange(newIndex);
  };

  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      <img
        src={images[currentIndex]}
        alt="Slide"
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <AiOutlineLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <AiOutlineRight />
      </button>
    </div>
  );
};

export default Carousel;
