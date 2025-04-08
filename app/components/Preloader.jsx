"use client";

import { useEffect, useState } from "react";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1000);
    return () => clearTimeout(timer); 
  }, []);

  if (!isVisible) return null; 

  return (
    <div id="preloader">
      <div className="izam-load"></div>
      <div className="izam_load_text">
        <p>
          i<b>Z</b>AM
        </p>
      </div>
    </div>
  );
};

export default Preloader;
