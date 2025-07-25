// src/components/ScootyTop.jsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ScootyTop = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { x: "100vw" },
      {
        x: "-200px",
        duration: 3,
        ease: "power2.inOut",
        onComplete: () => setIsVisible(false),
      }
    );
  }, []);

  if (!isVisible) return null;

  return (
    <div ref={ref} className="scooty-wrapper">
      <img src="/scot2-remove.png" alt="Scooty" className="scooty" />
      <div className="flag">🚀 Delivery within 30 minutes!</div>
    </div>
  );
};

export default ScootyTop;
