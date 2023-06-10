const ServicesCard = ({ heading, paragraph }) => {
  return (
    <div className="p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-2">{heading}</h2>
      <p className="text-gray-600">{paragraph}</p>
    </div>
  );
};

export default ServicesCard;
