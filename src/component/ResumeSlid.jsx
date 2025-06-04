import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const images = [
  'resumeTemp1.jpg',
  'coderimg.jpg',
  'resumeTemp2.jpg',
];

export default function ResumeSlid() {
  const [current, setCurrent] = useState(0);
  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div name="Resumebuild" className="relative w-full z-0 h-125 md:h-155 overflow-hidden rounded-lg">
      {/* Slides */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute flex justify-center w-full h-full transition-opacity duration-700 ease-in-out ${
            current === index ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
        >
         <Link to='/Corosal'>
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-lg h-full object-cover"
          />
          </Link>
          
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-400 hover:bg-gray-700">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 6 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1L1 5l4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-400 hover:bg-gray-700">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 6 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1 1 4 4-4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
