import React from 'react';
import { LocationMarkerIcon, ClockIcon } from '@heroicons/react/solid';

const TourPackage = ({ imageSrc, location, packageName, tripDuration }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4 bg-cardColor ">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={imageSrc}
          alt="Tour"
          className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <div className="flex items-center mb-2">
          <LocationMarkerIcon className="h-4 w-4 text-gray-500 mr-2" />
          <p className="text-gray-600 text-sm">{location}</p>
        </div>
        <h3 className="text-xl font-bold mb-2">{packageName}</h3>
        <div className="flex items-center">
          <ClockIcon className="h-4 w-4 text-gray-500 mr-1" />
          <p className="text-gray-600 text-sm">{tripDuration}</p>
        </div>
      </div>
    </div>
  );
};

export default TourPackage;
