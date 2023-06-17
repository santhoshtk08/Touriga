import React from 'react'
import Link from 'next/link'
import { PhoneIcon } from '@heroicons/react/solid';
import Image from 'next/image';
function Navbar() {
  const openWhatsAppChat = () => {
    // Replace 'your_phone_number' with your actual WhatsApp phone number
    const phoneNumber = '9524185491';
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };
  return (
    <nav className="flex-col sm:flex-row flex items-center justify-between bg-background h-20 mx-4">
      <div className="flex items-center">
        {/* <Link href="/" className="">
            <Image src="/tourigaLogo.png" alt="Brand Logo" className='h-20' width={200} height={1000} />
        </Link> */}
      </div>
      <div className="flex items-center" >
      <div className="flex items-center space-x-4 hover:bg-primary rounded-sm h-10">
        <Link href="/" className="text-black mx-4 font-fontRegular">
          Home
        </Link>
      </div>
      <div className="flex items-center space-x-4 hover:bg-primary rounded-sm h-10">
          <Link href="/PackagesPage/page" className="text-black mx-4 font-fontRegular">
          Packages
        </Link>
      </div>
      <div className='flex items-center'>
        <div>
        <PhoneIcon className="h-6 w-6 text-primary" />
      </div>
        <Link href="tel:+91 9524185491" className="mx-2">
          +91 9524185491
        </Link>
      </div>
        
        <button className="bg-primary text-black px-4 py-2 rounded-md ml-4  border-emerald-500 hover:bg-orange-400 focus:bg-orange-400 font-fontRegular" onClick={openWhatsAppChat}>
          Enquire Now
        </button>
      </div>
    </nav>
  )
}

export default Navbar