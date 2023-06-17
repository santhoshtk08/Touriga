import Image from 'next/image';
import React from 'react';

const ImageLayout = () => {
  return (
    <div className="flex my-10 px-60">
      <div className="w-96 mx-10">
        <Image
          src="/Andaman.png"
          alt="Image 1"
          className="w-full h-48 object-cover rounded-2xl"
          width={100}
          height={100}
        />
        <Image
          src="/karnataka.png"
          alt="Image 2"
          className="w-full h-96 object-cover mt-4 rounded-2xl"
          width={100}
          height={100}
        />
      </div>
      <div className="w-96 mx-10">
        <Image
          src="/Manali.png"
          alt="Image 3"
          className="w-full h-96 object-cover rounded-2xl"
          width={100}
          height={100}
        />
        <Image
          src="/Mountains.jpg"
          alt="Image 4"
          className="w-full h-48 object-cover mt-4 rounded-2xl"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default ImageLayout;
