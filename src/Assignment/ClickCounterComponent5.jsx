import React from 'react';
import useClickCounter from './CustomHook5';

const ClickCounterComponent = () => {
  const clickCount = useClickCounter();

  return (
    <div>
      <p>Number of clicks: {clickCount}</p>
    </div>
  );
};

export default ClickCounterComponent;
