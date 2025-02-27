import { useRef, useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
  const [showAd, setShowAd] = useState<boolean>(true);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    if (showSidebar) {
      gsap.to(sidebarRef.current, {
        transform: 'translateX(0)',
        border: '2px',
      });
    } else {
      gsap.to(sidebarRef.current, {
        transform: 'translateX(100%)',
      });
    }
  }, [showSidebar]);
  return (
    <>
      {showAd && (
        <div className="flex justify-between items-center bg-[#1A1A1A] bg-[url('./Abstract-Design.png')] px-4 md:px-6 py-4 md:py-2">
          <div className="flex-1 text-center">
            <p className="font-medium text-xs md:text-sm xl:text-lg">
              Discover Your Dream Property with Estatein{' '}
              <a className="underline">Learn More</a>
            </p>
          </div>
          <button
            onClick={() => setShowAd(false)}
            className="bg-[rgba(255,255,255,0.1)] px-1 rounded-full"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>
      )}
      <nav className="relative flex justify-between items-center bg-[#1A1A1A] px-4 md:px-10 py-4 md:py-4 border-gray-700 border-y overflow-hidden">
        <div className="flex items-center">
          <img
            src="./Logo.png"
            alt=""
            className="w-7 sm:w-8 xl:w-10 h-7 sm:h-8 xl:h-10"
          />
          <span className="px-2 font-medium">MyProperty</span>
        </div>
        <div className="hidden md:flex">
          <a href="#" className="mx-2 font-medium md:text-sm xl:text-lg">
            Home
          </a>
          <a href="#" className="mx-2 font-medium md:text-sm xl:text-lg">
            About Us
          </a>
          <a href="#" className="mx-2 font-medium md:text-sm xl:text-lg">
            Properties
          </a>
          <a href="#" className="mx-2 font-medium md:text-sm xl:text-lg">
            Services
          </a>
        </div>
        <button className="hidden md:flex bg-[#141414] px-4 py-2 border border-gray-700 rounded-lg font-medium md:text-sm xl:text-lg">
          Contact Us
        </button>
        <button
          onClick={() => {
            setShowSidebar(true);
          }}
          className="md:hidden flex"
        >
          <i className="ri-align-right w-7 h-7"></i>
        </button>

        <div
          ref={sidebarRef}
          className="md:hidden top-0 right-0 z-10 fixed flex flex-col justify-between items-center gap-y-4 bg-[#1A1A1A] px-4 md:px-10 py-20 md:py-4 w-1/2 h-screen translate-x-full"
        >
          <button
            onClick={() => setShowSidebar(false)}
            className="md:hidden w-full text-end"
          >
            <i className="ri-align-right w-7 h-7"></i>
          </button>
          <div className="flex flex-col gap-y-8">
            <a href="#" className="mx-2 font-medium md:text-sm xl:text-lg">
              Home
            </a>
            <a href="#" className="mx-2 font-medium md:text-sm xl:text-lg">
              About Us
            </a>
            <a href="#" className="mx-2 font-medium md:text-sm xl:text-lg">
              Properties
            </a>
            <a href="#" className="mx-2 font-medium md:text-sm xl:text-lg">
              Services
            </a>
          </div>
          <button className="bg-[#141414] px-4 py-2 border border-gray-700 rounded-lg font-medium md:text-sm xl:text-lg">
            Contact Us
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
