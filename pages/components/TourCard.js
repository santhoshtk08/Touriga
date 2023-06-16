import Image from "next/image";

const TourCard = ({ image, heading, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image className="w-full h-60 object-cover" src={image} alt="Card Image" width={100} height={100} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{heading}</div>
        <p className="text-gray-700 text-justify">{description}</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TourCard;
