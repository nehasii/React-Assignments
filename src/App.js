import React from "react";
import ExampleComponent from "./Assignment/ExampleComponent2";
import LightSwitchComponent from "./Assignment/LightSwitch1";
import DynamicTitleComponent from "./Assignment/PageComponent3";
import Slider from "./Assignment/Slider";
import Faq from "./Assignment/FAQ";
import TimerComponent from "./Assignment/TimerComponent4";
import useClickCounter from "./Assignment/CustomHook5";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Routing/Navbar";
import Home from "./Routing/Home";
import Login from "./Routing/Login";
import Products from "./Routing/Products";
import NotFound from "./Routing/NotFound";




function App() { 

  const clickCount = useClickCounter();

  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
      <h1>Hook 1</h1>
      <LightSwitchComponent/>

      <h1>Hook2</h1>
      <ExampleComponent />

      <h1>Hook3</h1>
      <DynamicTitleComponent/>

      <h1>Hook 4</h1>
      <TimerComponent/>

      <h1>Hook 5</h1>
      <p>Click anywhere on the screen: {clickCount}</p>

      <Slider/>

      <Faq/>
    </div>
  )
}

export default App;
