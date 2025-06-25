import React from "react";

const Welcome: React.FC = () => {
  return (
    <div className="w-screen h-[350px] overflow-hidden relative">
      <img 
        src="https://cdn.pixabay.com/photo/2022/09/10/22/09/science-lab-7445779_1280.jpg" 
        alt="Welcome background"
        className="w-full h-full object-cover"
      />
      <div className="absolute left-10 top-4/6 -translate-y-1/2 flex flex-col items-start">
        <span className="text-white text-3xl md:text-2xl font-extrabold drop-shadow-lg px-6 py-3 rounded">
          Welcome to a New Era of Innovation
        </span>
        <span className="text-white text-base md:text-sm font-medium drop-shadow px-6 pt-1">
          Relax and let Wyreflow guide your business into the future with seamless technology solutions that simplify, secure, and enhance your operations.
        </span>
      </div>
    </div>
  )
};

export default Welcome;