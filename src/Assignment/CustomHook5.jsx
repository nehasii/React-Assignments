import { useState, useEffect } from 'react';

const useClickCounter = () => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      setClickCount(prevCount => prevCount + 1);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return clickCount;
};

export default useClickCounter;

