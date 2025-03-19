"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, Presentation } from 'lucide-react';
import ScrollPresentation from './ScrollPresentation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [presentationOpen, setPresentationOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md text-[#2c4586] shadow-md' 
          : 'bg-transparent text-white'
      }`}>
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <Image src="/logo.png" alt="TechExpress Logo" width={50} height={40} />
                <span className="ml-2 text-xl font-bold">TechExpress</span>
              </div>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <Link href="/">
                <div className="hover:opacity-70 transition duration-300 cursor-pointer">Início</div>
              </Link>
              <Link href="/">
                <div className="hover:opacity-70 transition duration-300 cursor-pointer">Produtos</div>
              </Link>
              <Link href="/">
                <div className="hover:opacity-70 transition duration-300 cursor-pointer">Sobre Nós</div>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setPresentationOpen(true)}
                className={`hover:opacity-70 transition duration-300 flex items-center space-x-1 ${
                  scrolled ? 'text-[#2c4586]' : 'text-white'
                }`}
              >
                <Presentation size={20} />
                <span className="hidden sm:inline">Tour</span>
              </button>
              <button className="hover:opacity-70 transition duration-300">
                <Search size={20} />
              </button>
              <button className="hover:opacity-70 transition duration-300 relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Componente de apresentação */}
      <ScrollPresentation isOpen={presentationOpen} onClose={() => setPresentationOpen(false)} />
    </>
  );
}