import TourCard from './TourCard';

const CardContainer = () => {
  const cardsData = [
    {
      id: 1,
      image: '/Karnataka-Bliss.png',
      heading: 'Karnataka Bliss',
      description: 'Day 1 : Arrival at Bangalore Day 2 : Bangalore - Mysore (140 KMS - 03 Hours drive) Day 3 : Mysore Day 4 : Mysore - Coorg (110 Kms. - 02 ½ Hrs) Day 5 : Coorg Day 6 : Coorg - Bangalore (250 KMS - 06 Hours drive)',
    },
    {
      id: 2,
      image: '/Kulu-Manali.png',
      heading: 'Kulu Manali',
      description: 'Day 01: Chandigarh to Manali (310kms/9hrs) Day 02: Trip to Solang Valley + Manali local sightseeing Day 03: Manali to Shimla Via Kullu (250kms/7hrs) Day 04: Shimla & Kufri Day 05: Shimla to Chandigarh (Via Pinjore) Departure (125kms/4hrs)',
    },
    {
      id: 3,
      image: '/path/to/image3.jpg',
      heading: 'Card 3 Heading',
      description: 'Card 3 Description',
    },
  ];

  return (
    <div className="mx-4 
    
    
    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cardsData.map((card) => (
        <TourCard
          key={card.id}
          image={card.image}
          heading={card.heading}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardContainer;
