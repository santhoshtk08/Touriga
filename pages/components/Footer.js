import Link from 'next/link';
import { FiInstagram, FiTwitter, FiFacebook} from 'react-icons/fi';

const Footer = () => {
    const openWhatsAppChat = () => {
    // Replace 'your_phone_number' with your actual WhatsApp phone number
    const phoneNumber = '9524185491';
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="flex justify-center space-x-4">
        <Link href="https://www.instagram.com/touriga.in_/?igshid=YmMyMTA2M2Y%3D" passHref>
            <FiInstagram className="h-6 w-6" />
        </Link>
        <Link href="https://twitter.com/travelattouriga?s=11&t=YMAogEsx45xSzzV4J38mzg" passHref>
            <FiTwitter className="h-6 w-6" />
        </Link>
        <Link href="https://www.facebook.com/people/Touriga/100089906291820/?mibextid=LQQJ4d" passHref>
            <FiFacebook className="h-6 w-6" />
        </Link>
      </div>
      <div className="flex justify-center mt-4">
        <Link href="tel:+91 9524185491" className="text-gray-400 font-fontRegular">Contact: +91 9524185491</Link>
      </div>
      <div>
        <h1 className='flex justify-center font-fontRegular'>© 2023 Touriga. All rights reserved.</h1>
      </div>

      <div className="flex justify-center mt-4"> 
        <button className="bg-primary text-black px-4 py-2 rounded-md ml-4  border-emerald-500 hover:bg-orange-400 focus:bg-orange-400 font-fontRegular" onClick={openWhatsAppChat}>
          Enquire Now
        </button>
      </div>
    </footer>
  );
};

export default Footer;
