// components/Benefits.tsx
import React from 'react';
import { CreditCard, Truck, Award } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      id: 1,
      icon: <CreditCard size={32} />,
      title: 'Parcelamento Flexível',
      description: 'Parcele suas compras em até 12x sem juros.'
    },
    {
      id: 2,
      icon: <Truck size={32} />,
      title: 'Frete Fixo',
      description: 'Valor único de frete para todo o Brasil.'
    },
    {
      id: 3,
      icon: <Award size={32} />,
      title: 'Qualidade Garantida',
      description: 'Produtos com garantia e alta qualidade.'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#2c4586]">
          Nossos Benefícios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="flex flex-col items-center text-center p-6 bg-[#fbfbfb] rounded-lg shadow-md border border-[#b4c4e2] hover:shadow-lg transition duration-300"
            >
              <div className="text-[#5a79c9] mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#2c4586]">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}