// components/Footer.tsx
import React from 'react';

export default function Footer() {
  return (
    <footer className=" text-gray-400 py-6">
      <div className="container mx-auto px-2 text-center">
        <p className='text-sm'>© {new Date().getFullYear()} TechExpress. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}