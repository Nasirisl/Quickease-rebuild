// src/components/Hero.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const title = useRef();
  const subtitle = useRef();
  const button = useRef();

  useEffect(() => {
    gsap.from(title.current, { y: 50, opacity: 0, duration: 1, delay: 0.3 });
    gsap.from(subtitle.current, { y: 30, opacity: 0, duration: 1, delay: 0.6 });
    gsap.from(button.current, { scale: 0.8, opacity: 0, duration: 0.6, delay: 1 });
  }, []);

  return (
    <section className="hero" id="home">
      <h1 ref={title}>
        Get Anything Delivered with <span>QuickEase</span>
      </h1>
      <p ref={subtitle}>
        Your one-stop delivery solution for food, groceries, and packages — fast, affordable,
        and reliable.
      </p>
      <button ref={button}>Get Started</button>
    </section>
  );
};

export default Hero;
