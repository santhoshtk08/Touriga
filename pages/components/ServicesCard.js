
const ServicesCard = ({ heading, paragraph }) => {
  return (
    <div className="p-6 shadow-sm rounded-lg bg-cardColor">
      <h2 className="text-xl font-bold mb-2 font-fontRegular">{heading}</h2>
      <p className="text-gray-600 font-fontRegular">{paragraph}</p>
    </div>
  );
};

export default ServicesCard;
