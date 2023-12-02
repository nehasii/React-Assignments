import React from 'react';
import useTimer from './CustomHook4';

const TimerComponent = () => {
  const { time, isRunning, startTimer, pauseTimer, resetTimer } = useTimer();

  return (
    <div>
      <p>Time: {time} seconds</p>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={pauseTimer} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default TimerComponent;
