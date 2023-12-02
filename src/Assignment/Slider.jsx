import React, { useState, useEffect } from "react";

export default function Slider() {
  const urldata = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNmmiNBzKSJCb8hZFg-3AEQ9HDa8fzEILlsw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGee0M6DcAbgkHZ3ouT70E0Jb9yQGAGuhDQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdR4ADjFrYD7eVKy49bpKEfN0bIBhJSACuXQ&usqp=CAU"
  ];

  const [imageIndex, setImageIndex] = useState(0);

  const swipeRight = () => {
    setImageIndex((imageIndex + 1) % urldata.length);
  };

  const swipeLeft = () => {
    setImageIndex((imageIndex - 1 + urldata.length) % urldata.length);
  };

  useEffect(() => {
    const autoSlideInterval = setInterval(swipeRight, 2000);

    return () => {
      clearInterval(autoSlideInterval);
    };
  }, [imageIndex]); 

  return (
    <div>
      <img src={urldata[imageIndex]} alt="No" style={{ width: "100vw", height: "350px" }} />
      <button onClick={swipeLeft}> Left </button>
      <button onClick={swipeRight}> Right </button>
    </div>
  );
}
