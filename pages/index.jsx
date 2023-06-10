
import Image from 'next/image';
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import CarouselSlider from './components/CarouselSlider';

import ServicesCardLayout from './components/ServicesCardLayout'
import Navbar from './components/Navbar';
import TourCard from './components/TourCard'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='m-4'>
    <div>
      <Navbar />
    </div>
    <div>
      <CarouselSlider />
    </div>
    <div className='p-20'>
      <h1 className='text-2xl font-semibold'>Welcome to Touriga: Your Gateway to Unforgettable Adventures!</h1>
      <p className='my-3 text-xl text-justify'>At Touriga, we believe that every journey is an opportunity to create lasting memories. Whether you're planning a family getaway or organizing a corporate retreat, we are your trusted travel agency dedicated to delivering exceptional service and remarkable experiences, all at an unbeatable value.  We understand that every traveler is unique, and that's why we specialize in crafting personalized itineraries that cater to your specific preferences. From tropical beach escapes to thrilling urban explorations, we have a vast array of destinations and activities to suit every taste. At Touriga, we believe that exceptional travel experiences should be accessible to everyone That's why we work tirelessly to negotiate the best deals with our partners, ensuring that you receive outstanding value for your investment. We take pride in offering competitive prices without compromising on quality.</p>
    </div>
    <div className='my-7'>
    <h1 className='mx-6 text-2xl font-semibold'>OUR SERVICES</h1>
      <ServicesCardLayout />
    </div>
    <div>
      <TourCard 
        imageSrc="/bali.png"
        heading="Bali Tour"
        imageDescription="Bali"
        paragraph="Lorem"
      />
    </div>
    <div>
      <TourCard 
        imageSrc="/Kulu-Manali.png"
        heading="Kulu Manali Tour"
        imageDescription="Kulu Manali"
        paragraph="Lorem"
      />
    </div>
  </div>
  )
}
