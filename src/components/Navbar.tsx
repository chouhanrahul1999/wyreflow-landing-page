import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full z-30 bg-gray-950 text-white backdrop-blur border-gray-100 fixed top-0 left-0 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-24 py-4">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-4xl tracking-tight text-white">
            Wyreflow
          </span>
        </div>
        <div className="flex gap-6 text-sm">
          <span className="text-white hover:text-blue-600 transition cursor-pointer">
            Home
          </span>
          <span className="flex justify-center gap-2 text-gray-300 hover:text-white transition cursor-pointer">
            Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
          <span className="hover:text-blue-600 transition cursor-pointer">
            About us
          </span>
          <span className="hover:text-blue-600 transition cursor-pointer">
            Career
          </span>
          <span className="hover:text-blue-600 transition cursor-pointer">
            Industries
          </span>
          <span className="hover:text-blue-600 transition cursor-pointer">
            Contact
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
