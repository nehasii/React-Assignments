import React from 'react';
import Slider from '../Assignment/Slider';
import LightSwitchComponent from '../Assignment/LightSwitch1';
import ExampleComponent from '../Assignment/ExampleComponent2';
import DynamicTitleComponent from '../Assignment/PageComponent3';
import TimerComponent from '../Assignment/TimerComponent4';
import useClickCounter from "../Assignment/CustomHook5";

const Home = () => {
  const clickCount = useClickCounter();

  return (
    <div>
       <Slider/>
       <hr/>
      <h1>Hook 1</h1>
      <LightSwitchComponent />
      <hr/>

      <h1>Hook 2</h1>
      <ExampleComponent />
      <hr/>

      <h1>Hook 3</h1>
      <DynamicTitleComponent />
      <hr/>

      <h1>Hook 4</h1>
      <TimerComponent />
      <hr/>

      <h1>Hook 5</h1>
      <p>Click anywhere on the screen: {clickCount}</p>
    </div>
  );
};

export default Home;
