'use client';

import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  animation?: 'fadeInUp' | 'fadeIn' | 'slideInLeft';
}

export default function AnimatedSection({ 
  children, 
  delay = 0,
  animation = 'fadeInUp' 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translateY(0) translateX(0)';
    if (animation === 'fadeInUp') return 'translateY(30px)';
    if (animation === 'slideInLeft') return 'translateX(-30px)';
    return 'none';
  };

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: isVisible 
          ? `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
          : 'none',
      }}
    >
      {children}
    </Box>
  );
}
