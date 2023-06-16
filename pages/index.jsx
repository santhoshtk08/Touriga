
import Image from 'next/image';
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import CarouselSlider from './components/CarouselSlider';

import ServicesCardLayout from './components/ServicesCardLayout'
import Navbar from './components/Navbar';
import TourCardLayout from './components/TourCardLayout'
import Footer from './components/Footer';



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
    <div>
      <section className="hero bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Dream Destinations</h1>
        <p className="text-lg mb-8">Explore the world with our curated tour packages</p>
        <button className="bg-white text-blue-500 hover:bg-blue-400 hover:text-white rounded-full py-3 px-6 font-semibold transition-all duration-300">
          Get Started
        </button>
      </div>
    </section>
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
    <h1 className='my-4 text-2xl font-semibold mx-6'>Popular Packages</h1>
      <TourCardLayout />
    </div>
    <div>
      <Footer />
    </div>
  </div>
  )
}
