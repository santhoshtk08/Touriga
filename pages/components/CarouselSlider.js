import { useState, useEffect } from 'react';
import Image from 'next/image';


const CarouselSlider = () => {
  const images = [
    '/bali.png',
    '/Astonishing_Andaman.png',
    '/Kulu-Manali.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative my-7">
      <Image
        src={images[currentImageIndex]}
        alt="Carousel Image"
        width={2000}
        height={2000}
        className='bg-opacity-30'
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white font-headingFont">BUILD YOUR NEXT TRIP WITH US</h2>
      </div>
    </div>
  );
};

export default CarouselSlider;
