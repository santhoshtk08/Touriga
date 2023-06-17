import React from 'react';

const Booking = () => {
  return (
    <div className="bg-background py-10">
      <div className="w-auto mx-auto px-44">
        <h2 className="text-4xl font-bold mb-6 font-fontMargarine h-auto w-6/12 ">Ready to embark on your dream journey? Book today and experience the magic of Touriga!</h2>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Book Now
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
