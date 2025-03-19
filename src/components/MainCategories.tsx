// components/MainCategories.tsx
import React from 'react';
import Image from 'next/image';

export default function MainCategories() {
  const categories = [
    {
      id: 1,
      name: 'Smartphones',
      image: 'https://martinelloeletrodomesticos.fbitsstatic.net/img/p/smartphone-xiaomi-redmi-note-13-cx387-256gb-azul-tela-6-67-cam-tripla-selfie-16mp-79764/266356.jpg?w=482&h=482&v=no-change&qs=ignore'
    },
    {
      id: 2,
      name: 'Smartwatches',
      image: 'https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-experience-for-entire-family-hero_09152020_big.jpg.large.jpg'
    },
    {
      id: 3,
      name: 'Notebooks',
      image: 'https://m.media-amazon.com/images/I/51Ri6f37FRL.jpg'
    },
    {
      id: 4,
      name: 'Headsets',
      image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g433/g433-gallery-black-1.png?v=1'
    }
  ];

  return (
    <div className="py-16 bg-[#fbfbfb]">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#2c4586]">
          Nossas Principais Produtos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer">
              <div className="relative h-64 w-full">
                <Image 
                  src={category.image} 
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c4586] to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="mt-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver produtos
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}