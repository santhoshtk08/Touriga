
import Image from 'next/image';
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import CarouselSlider from './components/CarouselSlider';

import ServicesCardLayout from './components/ServicesCardLayout'
import Navbar from './components/Navbar';
import TourCardLayout from './components/TourCardLayout'
import Footer from './components/Footer';
import TextImage from './components/TextImage';
import Faq from './components/Faq';
import ImageOverlay from './components/ImageOverlay';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const onStepEnter = ({ element }) => {
    element.classList.add('slide-in');
  };
  return (
    <div className='bg-background'>
    <div>
      <Navbar />
    </div>
    <div>
      <ImageOverlay />
    </div>
    <div className='p-20'>
      <h1 className='text-4xl font-semibold font-headingFont'>Welcome to Touriga: Your Gateway to Unforgettable Adventures!</h1>
      <p className='my-3 text-xl text-justify font-fontRegular'>At Touriga, we believe that every journey is an opportunity to create lasting memories. Whether you're planning a family getaway or organizing a corporate retreat, we are your trusted travel agency dedicated to delivering exceptional service and remarkable experiences, all at an unbeatable value.  We understand that every traveler is unique, and that's why we specialize in crafting personalized itineraries that cater to your specific preferences. From tropical beach escapes to thrilling urban explorations, we have a vast array of destinations and activities to suit every taste. At Touriga, we believe that exceptional travel experiences should be accessible to everyone That's why we work tirelessly to negotiate the best deals with our partners, ensuring that you receive outstanding value for your investment. We take pride in offering competitive prices without compromising on quality.</p>
    </div>
    <div className='my-7'>
    <h1 className='mx-6 text-4xl font-semibold font-headingFont'>Why Choose Touriga</h1>
      <ServicesCardLayout />
    </div>
      <div>
        <TextImage />
      </div>
    <div>
    <h1 className='my-4 text-4xl font-semibold mx-6 font-headingFont'>Our Top Tours</h1>
      <TourCardLayout />
    </div>
    <div>
      <Faq />
    </div>
    <div>
      <Footer />
    </div>
  </div>
  )
}
