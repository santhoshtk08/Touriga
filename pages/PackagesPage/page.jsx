import Link from 'next/link'
import Navbar from '../components/Navbar'
import TourPackage from '../components/TourPackage'

function PackagesPage() {
  return (
    <div className='bg-background'>
      <div>
        <Navbar />
      </div>
      <div className='flex justify-center'>
        <h1 className='text-5xl font-headingFont'>Tour Packages</h1>
      </div>
       <div className="flex flex-wrap -mx-4">
        <TourPackage
          imageSrc="/karnataka.png"
          location="London, UK"
          packageName="City Exploration"
          tripDuration="3 Nights / 4 Days"
        />
        {/* Add more TourCard components here */}
        <TourPackage
          imageSrc="/karnataka.png"
          location="London, UK"
          packageName="City Exploration"
          tripDuration="3 Nights / 4 Days"
        />
        <TourPackage
          imageSrc="/karnataka.png"
          location="London, UK"
          packageName="City Exploration"
          tripDuration="3 Nights / 4 Days"
        />
        <TourPackage
          imageSrc="/karnataka.png"
          location="London, UK"
          packageName="City Exploration"
          tripDuration="3 Nights / 4 Days"
        />
        <TourPackage
          imageSrc="/karnataka.png"
          location="London, UK"
          packageName="City Exploration"
          tripDuration="3 Nights / 4 Days"
        />
        <TourPackage
          imageSrc="/karnataka.png"
          location="London, UK"
          packageName="City Exploration"
          tripDuration="3 Nights / 4 Days"
        />
        <TourPackage
          imageSrc="/karnataka.png"
          location="London, UK"
          packageName="City Exploration"
          tripDuration="3 Nights / 4 Days"
        />
        <TourPackage
          imageSrc="/karnataka.png"
          location="London, UK"
          packageName="City Exploration"
          tripDuration="3 Nights / 4 Days"
        />
        <TourPackage
          imageSrc="/karnataka.png"
          location="London, UK"
          packageName="City Exploration"
          tripDuration="3 Nights / 4 Days"
        />
      </div>
    </div>
  )
}

export default PackagesPage