import { useState } from "react";

function useLightSwitch() {
  const [isToggle, setIsToggle] = useState(false);

  const toggle = () => {
    setIsToggle(!isToggle);
  };

  return {
    isToggle,
    toggle,
  };
}

export default useLightSwitch;
