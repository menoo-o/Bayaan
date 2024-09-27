import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setImage('hero.jpg');
      } else {
        setImage('hero2.jpg');
      }
    };

    // Run on initial mount to set the correct image based on current screen width
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='hero-container'>
      <img src={image} alt='hero image' className='hero-img' />
    </div>
  );
};

export default Hero;
