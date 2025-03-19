"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from 'next/image';
import banner1 from '../../public/banner1.png';
import banner2 from '../../public/banner2.png';

export default function Banner() {
  const banners = [
    {
      id: 1,
      image: banner1,
      width: 1920,
      height: 1080,
    },
    {
      id: 2,
      image: banner2,
      width: 1920,
      height: 1080,
    }
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="flex justify-center py-6 bg-[#fbfbfb]">
      
      <div className="relative h-96 w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg">
        
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentBanner * 100}%)` }}
        >
          {banners.map((banner) => (
            <div key={banner.id} className="min-w-full h-full relative">
              <Image
                src={banner.image}
                alt={`Banner ${banner.id}`}
                width={banner.width}
                height={banner.height}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <button
          onClick={prevBanner}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextBanner}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 bg-gray-100 p-2 rounded-full">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-2 h-2 rounded-full ${
                currentBanner === index ? "bg-[#5a79c9] w-4" : "bg-gray-300 bg-opacity-50"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}