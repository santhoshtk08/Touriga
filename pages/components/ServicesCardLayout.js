import ServicesCard from './ServicesCard';

const ServicesCardLayout = () => {
  const cards = [
    { heading: 'Pro Guides', paragraph: 'Experienced tour guides making your trips more insightful.' },
    { heading: 'Best Deals', paragraph: 'Unbeatable prices on international and domestic tours.' },
    { heading: 'Tailored Trips', paragraph: 'Handpicked itineraries, customized to your preferences.' },
    { heading: '24/7 Support', paragraph: 'Our team is always available to attend to your needs.' },
    { heading: 'Premium Stays', paragraph: 'High-quality accommodations for a restful experience.' },
    { heading: 'Thrilling Activities', paragraph: 'Experience unique local attractions and thrilling adventures.' },
  ];

  return (
    <div className="flex flex-wrap w-100 h-50">
      {cards.map((card, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
          <ServicesCard heading={card.heading} paragraph={card.paragraph} />
        </div>
      ))}
    </div>
  );
};

export default ServicesCardLayout;
