'use client';
import { useEffect } from 'react';
import useFluidCursor from '../hook/useFluidCursor';

const FluidCursor = () => {
  useEffect(() => {
    // Wait for the canvas to be in the DOM
    const timer = setTimeout(() => {
      useFluidCursor();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='fixed top-0 left-0 z-0 pointer-events-none'>
      <canvas 
        id='fluid' 
        className='w-screen h-screen pointer-events-none'
      />
    </div>
  );
};

export default FluidCursor;