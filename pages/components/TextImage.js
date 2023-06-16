import React from 'react';
import Image from 'next/image';

const TextImage = () => {
  return (
    <div className='my-7'>
        <div className="container flex items-center justify-center py-8">
      <div className="w-full lg:w-1/2">
        <p className="text-4xl text-left my-6 mx-6 font-headingFont">Curated Experiences for Your Wanderlust.</p>
        <p className="text-lg text-left mx-6 font-fontRegular">Our team of travel experts meticulously chooses premier authentic experiences and breathtaking sceneries to craft unforgettable journeys.</p>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image src='/Mountains.jpg' className='rounded-md overflow-hidden' width={400} height={300} />
      </div>
    </div>

    <div className="container flex items-center justify-center py-8">
    <div className="w-full lg:w-1/2 flex justify-center">
        <Image src='/Accomodation.jpg' className='rounded-md overflow-hidden' width={500} height={400} />
      </div>
      <div className="w-full lg:w-1/2">
        <p className="text-4xl text-left my-6 mx-6 font-headingFont">Luxury Accommodations & Convenient Transportation</p>
        <p className="text-lg text-left mx-6 font-fontRegular">Stay in hand-selected, luxurious accommodations and enjoy hassle-free transportation for a seamless, enjoyable trip.</p>
      </div>
      
    </div>
    </div>
    
  );
};

export default TextImage;
