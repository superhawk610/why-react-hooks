import React, { useState, useEffect } from 'react';
import Card from './Card';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return width;
}

function MyComponent() {
  const width = useWindowWidth();

  return <Card>Window width is {width}px.</Card>;
}

export default MyComponent;
