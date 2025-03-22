import { useEffect, useRef, useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
              Discover Your Dream Property with MyPoperty{' '}
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
      <nav className="relative flex justify-between items-center bg-[#1A1A1A] px-4 md:px-10 py-4 md:py-4 border-gray-700 border-y">
        <div className="flex items-center">
          <img
            src="./Logo.png"
            alt=""
            className="w-7 sm:w-8 xl:w-10 h-7 sm:h-8 xl:h-10"
          />
          <span className="px-2 font-medium">MyProperty</span>
        </div>
        <div className="hidden md:flex">
          <Link to="/" className="mx-2 font-medium md:text-sm xl:text-lg">
            Home
          </Link>
          <Link
            to="/about-us"
            className="mx-2 font-medium md:text-sm xl:text-lg"
          >
            About Us
          </Link>
          <Link
            to="/properties"
            className="mx-2 font-medium md:text-sm xl:text-lg"
          >
            Properties
          </Link>
          <Link
            to="/services"
            className="mx-2 font-medium md:text-sm xl:text-lg"
          >
            Services
          </Link>
        </div>
        <div className="hidden md:flex items-center">
          <Link
            to="/contact-us"
            className="bg-[#141414] px-4 py-2 border border-gray-700 rounded-lg font-medium md:text-sm xl:text-lg"
          >
            Contact Us
          </Link>
          <UserProfile />
        </div>
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
            <Link
              to="/"
              onClick={() => setShowSidebar(false)}
              className="mx-2 font-medium md:text-sm xl:text-lg"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              onClick={() => setShowSidebar(false)}
              className="mx-2 font-medium md:text-sm xl:text-lg"
            >
              About Us
            </Link>
            <Link
              to="/properties"
              onClick={() => setShowSidebar(false)}
              className="mx-2 font-medium md:text-sm xl:text-lg"
            >
              Properties
            </Link>
            <Link
              to="/services"
              onClick={() => setShowSidebar(false)}
              className="mx-2 font-medium md:text-sm xl:text-lg"
            >
              Services
            </Link>
          </div>
          <Link
            to="/contact-us"
            onClick={() => setShowSidebar(false)}
            className="bg-[#141414] px-4 py-2 border border-gray-700 rounded-lg font-medium md:text-sm xl:text-lg"
          >
            Contact Us
          </Link>

          <UserProfile />
        </div>
      </nav>
    </>
  );
};
export default Navbar;

interface User {
  firstname: string;
  email: string;
  avatar?: string;
}

function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('User fecthing failed:', error.response?.data);
        } else {
          console.error('Unexpected error:', error);
          localStorage.removeItem('token');
        }
      }
    };
    fetchUser();
  }, [token]);

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/logout`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.message) {
        setUser(null);
        localStorage.removeItem('token');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('User logout failed:', error.response?.data);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

  return (
    <div className="inline-block relative mx-2">
      <div className="flex flex-col justify-center items-center">
        <div className="border border-gray-300 rounded-full w-10 h-10 overflow-hidden">
          <img
            src={user?.avatar || '/user-icon.png'}
            alt="Profile"
            className="w-full h-full object-cover"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
      {isOpen && (
        <div className="md:top-full right-1/2 md:right-1/3 z-50 absolute bg-slate-600 shadow-lg mt-1 p-2 border rounded transition-all translate-x-1/2 md:translate-x-0 duration-500 ease-in-out">
          {user ? (
            <div className="text-center">
              <p className="font-semibold">{user.firstname}</p>
              <p className="hidden md:block text-sm">{user.email}</p>
              <button
                className="bg-red-500 hover:bg-red-600 mt-1 md:mt-2 px-2 py-1 rounded w-full text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="text-center">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded w-full text-white"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
