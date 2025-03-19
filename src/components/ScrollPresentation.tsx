"use client"

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface SlideContent {
  id: number;
  image: string;
  position: 'full' | 'centered';
}

interface ScrollPresentationProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScrollPresentation: React.FC<ScrollPresentationProps> = ({ isOpen, onClose }) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Slides com imagens incorporadas no código
  const slides: SlideContent[] = [
    {
      id: 1,
      image: '1.png',
      position: "full"
    },
    {
      id: 2,
      image: '2.png',
      position: "full"
    },
    {
      id: 3,
      image: '3.png',
      position: "full"
    },
    {
      id: 4,
      image: '4.png',
      position: "full"
    },
    {
      id: 5,
      image: '5.png',
      position: "full"
    },
    {
      id: 6,
      image: '6.png',
      position: "full"
    },
    {
      id: 7,
      image: '7.png',
      position: "full"
    },
    {
      id: 8,
      image: '8.png',
      position: "full"
    },
    {
      id: 9,
      image: '9.png',
      position: "full"
    }
  ];

  // Função para navegar diretamente para um slide específico
  const goToSlide = useCallback((index: number) => {
    if (index < 0 || index >= slides.length) return;

    setActiveSlide(index);

    if (containerRef.current) {
      const container = containerRef.current;
      const slideHeight = container.clientHeight;
      container.scrollTo({
        top: slideHeight * index,
        behavior: 'smooth'
      });
    }
  }, [slides.length]);

  // Controla o slide ativo baseado no scroll
  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const container = containerRef.current;

    const handleScroll = () => {
      const containerHeight = container.clientHeight;
      const scrollPosition = container.scrollTop;
      const newActiveSlide = Math.round(scrollPosition / containerHeight);

      if (newActiveSlide !== activeSlide && newActiveSlide >= 0 && newActiveSlide < slides.length) {
        setActiveSlide(newActiveSlide);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isOpen, activeSlide, slides.length]);

  // Desabilita o scroll do body quando o modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Adiciona navegação pelo teclado
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        goToSlide(Math.max(0, activeSlide - 1));
      } else if (e.key === 'ArrowDown') {
        goToSlide(Math.min(slides.length - 1, activeSlide + 1));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeSlide, slides.length, onClose, goToSlide]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
      {/* Botão para fechar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 bg-white/20 backdrop-blur-md text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/30 transition-colors"
      >
        ✕
      </button>

      {/* Indicadores de progresso */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeSlide ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
              }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Botões de navegação */}
      <button
        onClick={() => goToSlide(activeSlide - 1)}
        className={`absolute left-1/2 top-6 transform -translate-x-1/2 bg-white/20 backdrop-blur-md text-white rounded-full p-2 transition-colors z-40 ${activeSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/30'
          }`}
        disabled={activeSlide === 0}
        aria-label="Slide anterior"
      >
        <ChevronUp size={24} />
      </button>

      <button
        onClick={() => goToSlide(activeSlide + 1)}
        className={`absolute left-1/2 bottom-6 transform -translate-x-1/2 bg-white/20 backdrop-blur-md text-white rounded-full p-2 transition-colors z-40 ${activeSlide === slides.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/30'
          }`}
        disabled={activeSlide === slides.length - 1}
        aria-label="Próximo slide"
      >
        <ChevronDown size={24} />
      </button>

      {/* Container de scroll */}
      <div
        ref={containerRef}
        className="h-screen overflow-y-auto snap-y snap-mandatory"
        style={{ scrollBehavior: 'smooth' }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="h-screen flex items-center justify-center snap-start px-4 md:px-8"
          >
            <div
              className={`transform transition-all duration-1000 ${activeSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                } ${slide.position === 'full' ? 'w-full max-w-6xl' : 'w-full max-w-4xl'
                }`}
            >
              {/* Usando div com background-image como no Banner */}
              <div
                className={`
                  rounded-lg md:rounded-xl overflow-hidden shadow-2xl
                  ${slide.position === 'full' ? 'w-full' : 'mx-auto'}
                  ${slide.position === 'full' ? 'h-[80vh]' : 'h-[70vh]'}
                `}
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollPresentation;