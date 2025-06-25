import React from "react";

const Hero: React.FC = () => {
  return (
    <div
      className="w-screen h-screen mx-auto flex bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2021/12/20/12/45/woman-6882918_1280.jpg')",
      }}
    >
      <div className="flex-1 h-full flex items-center justify-start p-10">
        <span className="text-2xl md:text-4xl font-semibold text-white drop-shadow-lg px-4 py-2 rounded">
          Leading the Way in Digital Innovation
        </span>
      </div>
      <div className="flex-1  h-full flex flex-col items-start justify-center p-10 gap-4">
        <span className="text-sm md:text-xl font-light text-white drop-shadow-lg px-4 py-2 rounded">
          Unlock the Potential of Digital Transformation with Our Expertise in
          Cloud, AI, Cybersecurity, and Data Analytics
        </span>
        <span className="text-xl flex items-center md:text-xl font-semibold text-white drop-shadow-lg  px-4 py-2 rounded mt-4">
          See what we do
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Hero;
