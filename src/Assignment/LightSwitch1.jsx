import React from "react";
import useLightSwitch from "./CustomHook1"; 

export default function LightSwitchComponent() {
  const { isToggle, toggle } = useLightSwitch();

  return (
    <div>
      <img
        src={
          isToggle ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUx3vSu3rSIR0F389WGBSU2nrVIWjamJOAQ&usqp=CAU"
                   : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqhsuHKdCZ98--sZb6pC2ixdYznpxFey1Og&usqp=CAU"
        }
        alt={isToggle ? "On" : "Off"}
        style={{width:"150px", height:"150px"}}
      />
      <button onClick={toggle}>{isToggle ? "Turn Off" : "Turn On"}</button>
    </div>
  );
}

