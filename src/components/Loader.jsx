import React, { useEffect } from "react";
import "../index.css"; 
import gsap from "gsap";

const Loader = ({ onFinish }) => {
  useEffect(() => {
    gsap.to(".loader", {
      opacity: 0,
      duration: 0.3,
      delay: 0.5,
      onComplete: () => {
        document.querySelector(".loader").style.display = "none";
        onFinish(); // tells App to render the rest
      },
    });
  }, [onFinish]);

  return (
    <div className="loader">
      <h1>Loading QuickEase...</h1>
      <span className="spinner"></span>
    </div>
  );
};

export default Loader;
