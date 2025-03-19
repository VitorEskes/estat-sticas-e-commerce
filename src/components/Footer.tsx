// components/Footer.tsx
import React from 'react';

export default function Footer() {
  return (
    <footer className=" text-gray-400 py-6">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} ShopNow. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}