'use client';
import { useEffect, useState } from 'react';

interface FloatingBackgroundProps {
  images: string[];
  interval?: number;
  className?: string;
}

export function FloatingBackground({ 
  images, 
  interval = 1000,
  className = '' 
}: FloatingBackgroundProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setNextIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`fixed inset-0 z-0 ${className}`}>
      {/* Current Image */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: isTransitioning ? 0 : 1,
        }}
      />
      
      {/* Next Image */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: `url(${images[nextIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: isTransitioning ? 1 : 0,
        }}
      />
      
      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-white/40" />
    </div>
  );
}
