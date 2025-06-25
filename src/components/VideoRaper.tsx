import React from "react";

const VideoRaper: React.FC = () => {
  return (
    <section className="w-full h-[1000px] bg-black flex items-center justify-center">
      <div className="w-full h-full grid grid-cols-2 grid-rows-2">
        <div className="relative bg-black shadow flex items-center justify-center group">
          <video
            src="https://cdn.pixabay.com/video/2023/05/05/161739-824152752_large.mp4"
            className="absolute inset-0 w-full h-full object-cover "
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="relative z-10 flex flex-col items-center gap-2">
            <span className="text-4xl max-w-md flex text-center font-black text-white drop-shadow-lg group-hover:scale-105 group-hover:text-blue-200 transition duration-300">
              Your Partner in Digital Innovation
            </span>
            <span className="text-lg max-w-md flex text-center font-semibold text-white drop-shadow-lg  px-4 py-2 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300">
              Driving progress with tailored technology solutions for a dynamic marketplace
            </span>
          </div>
        </div>
        <div className="relative bg-black shadow flex items-center justify-center group">
          <video
            src="https://cdn.pixabay.com/video/2016/08/11/4372-178617297_large.mp4"
            className="absolute inset-0 w-full h-full object-cover "
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="relative z-10 flex flex-col items-center gap-2">
            <span className="text-4xl max-w-md flex text-center font-black text-white drop-shadow-lg group-hover:scale-105 group-hover:text-blue-200 transition duration-300">
              Innovate Beyond Boundaries
            </span>
            <span className="text-lg max-w-md flex text-center font-semibold text-white drop-shadow-lg  px-4 py-2 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300">
              Empowering businesses with innovative technology solutions for a smarter future
            </span>
          </div>
        </div>
        <div className="relative bg-black shadow flex items-center justify-center group">
          <video
            src="https://cdn.pixabay.com/video/2024/03/12/203987-923133879_large.mp4"
            className="absolute inset-0 w-full h-full object-cover "
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="relative z-10 flex flex-col items-center gap-2">
            <span className="text-4xl max-w-md flex text-center font-black text-white drop-shadow-lg group-hover:scale-105 group-hover:text-blue-200 transition duration-300">
              Accelerating Digital Transformation
            </span>
            <span className="text-lg max-w-md flex text-center font-semibold text-white drop-shadow-lg  px-4 py-2 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300">
              Building seamless integrations and connectivity solutions that drive modern enterprises
            </span>
          </div>
        </div>
        <div className="relative bg-black shadow flex items-center justify-center group">
          <video
            src="https://cdn.pixabay.com/video/2023/08/01/174086-850404739_large.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="relative z-10 flex flex-col items-center gap-2">
            <span className="text-4xl max-w-md flex text-center font-black text-white drop-shadow-lg group-hover:scale-105 group-hover:text-blue-200 transition duration-300">
              Connecting Tomorrow, Today
            </span>
            <span className="text-lg max-w-md flex text-center font-semibold text-white drop-shadow-lg  px-4 py-2 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300">
              Breaking barriers with transformative technologies that expand what’s possible
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoRaper;

