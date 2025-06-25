import React, { useEffect, useState } from "react";


const images = [
  "https://cdn.pixabay.com/photo/2022/01/10/22/14/woman-6929333_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/12/17/12/45/football-3024154_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/01/07/06/54/eye-6921238_1280.jpg"
];

const Slide: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[98%] mx-auto h-[312px] overflow-hidden rounded-2xl my-6 pt-6 relative">
      <img
        src={images[index]}
        alt={`slide-${index}`}
        className="w-full h-full object-cover transition-all duration-700 rounded-2xl"
      />
      <div className="absolute bottom-4 left-6 flex gap-3 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-500 ${index === i ? 'bg-white' : 'bg-white/40'}`}
            aria-label={`Go to slide ${i + 1}`}
            tabIndex={-1}
            disabled
          />
        ))}
      </div>
    </div>
  )
};

export default Slide;