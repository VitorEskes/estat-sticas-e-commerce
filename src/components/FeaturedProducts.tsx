import React from 'react';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: 'Fone De Ouvido Bluetooth',
      price: 'R$ 299,90',
      image: 'https://png.pngtree.com/png-vector/20230407/ourmid/pngtree-bluetooth-headset-electronics-red-transparent-png-image_6687197.png',
      width: 482,
      height: 482
    },
    {
      id: 2,
      name: 'Smartphone Premium',
      price: 'R$ 1.999,90',
      image: 'https://brmotorolanew.vtexassets.com/arquivos/ids/171331/tela-smartphone-moto-g24-grafite.png?v=638775769678270000',
      width: 560,
      height: 560
    },
    {
      id: 3,
      name: 'Notebook Gamer',
      price: 'R$ 3.999,90',
      image: 'https://lojanave.vtexassets.com/arquivos/ids/163534-560-560?v=638346428925830000&width=560&height=560&aspect=true',
      width: 560,
      height: 560
    },
    {
      id: 4,
      name: 'Smartwatch Fitness',
      price: 'R$ 349,90',
      image: 'https://png.pngtree.com/png-vector/20240726/ourmid/pngtree-smart-watch-png-image_13137200.png',
      width: 482,
      height: 482
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#2c4586]">
          Produtos em Destaque
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300">
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                <div className="relative h-48 w-full">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    width={product.width}
                    height={product.height}
                    className="w-full h-full object-contain" 
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-[#2c4586] mb-2">{product.name}</h3>
                <p className="text-lg font-bold text-[#5a79c9] mb-3">{product.price}</p>
                <button className="w-full py-2 px-4 bg-[#5a79c9] hover:bg-[#2c4586] text-white rounded flex items-center justify-center transition duration-300">
                  <ShoppingCart size={18} className="mr-2" />
                  Adicionar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}