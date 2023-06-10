import Image from "next/image";

const TourCard = ({ imageSrc, heading, paragraph, imageDescription }) => {
  return (
    <div className="flex flex-row">
         <div className="max-w-sm rounded overflow-hidden shadow-lg m-16">
      <Image
        className="w-full h-70 object-cover object-center hover:scale-105 transition-transform duration-300"
        src={imageSrc}
        width={500}
        height={700}
        alt={imageDescription}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{heading}</div>
        <p className="text-gray-700 text-base">
          {paragraph}
        </p>
      </div>
      <div className="px-6 py-4">
        <button className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Book Now
        </button>
      </div>
    </div>
    </div>
   
  );
};

export default TourCard;
