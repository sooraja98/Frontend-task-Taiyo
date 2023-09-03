import React, { useState } from "react";
import { Link } from "react-router-dom";

// Define the props interface for the SideBar component
interface SidebarProps {
  // Define the props that your component expects
}

const SideBar: React.FC<SidebarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      <nav>
        <div className="hidden mt-0 md:h-screen md:w-64 md:bg-gray-800 md:flex md:flex-col md:text-white md:justify-center md:text-center md:pt-7">
          <div>
            <h1 className="">
              <Link to="/">Contact</Link>
            </h1>
          </div>
          <div>
            <h1 className="mt-10">
              <Link to="/chart-and-map">Chart and Map</Link>
            </h1>
          </div>
        </div>
        <div className="md:hidden p-4 flex justify-between w-full bg-gray-800 ">
          <div>
            <h1 className="text-white text-center p-1">TAIYO</h1>
          </div>
          <div>
            <button onClick={toggleMobileMenu}>
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="white">
                <path d="M64 192h896v76.8H64V192z m0 281.6h896v76.8H64V473.6z m0 281.6h896V832H64v-76.8z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div className="container flex justify-center bg-gray-800 ">
        <nav>
          {mobileMenuOpen && (
            <div className="md:hidden w-full text-white text-center shadow-2xl justify-center">
              <div className="border-b-2 hover:bg-gray-500 rounded-sm p-1">
                <Link to="/">Contact</Link>
              </div>
              <div className="border-b-2 hover:bg-gray-500 rounded-sm p-1">
                <Link to="/chart-and-map">Chart and Map</Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
