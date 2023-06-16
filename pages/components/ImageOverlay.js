import Image from "next/image";


const ImageOverlay = () => {
  return (
    <div className="relative w-full h-screen">
      <Image src='/travelBackground.jpg' alt="BackgroundImage" className="object-cover w-full h-full blur-1/4" width={1000} height={1000}/>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-9xl font-bold mb-4 font-headingFont text-black">Touriga</h1>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headingFont text-black">Discover Your Dream Destinations</h1>
        <p className="text-2xl mb-8 font-headingFont text-black">Explore the world with our curated tour packages</p>
      </div>
    </div>
  );
};

export default ImageOverlay;
