import ServicesCard from './ServicesCard';

const ServicesCardLayout = () => {
  const cards = [
    { heading: 'Personalized Matching', paragraph: 'Our unique matching system lets you find just the tour you want for your next holiday.' },
    { heading: 'Wide Variety of Tours', paragraph: 'We offer a wide variety of personally picked tours with destinations all over the globe.' },
    { heading: 'Highly Qualified Service', paragraph: 'Our tour managers are qualified, skilled, and friendly to bring you the best service..' },
    { heading: '24/7 Support', paragraph: 'You can always get professional support from our staff 24/7 and ask any question you have.' },
    { heading: 'Handpicked Hotels', paragraph: 'Our team offers only the best selection of affordable and luxury hotels to our clients..' },
    { heading: 'Best Price Guarantee', paragraph: 'If you find tours that are cheaper than ours, we will compensate the difference.' },
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
