import React, { useEffect, useRef } from "react";
import "./HowAndWhy.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
  
const HowAndWhy = () => {
  const cardsRef = useRef([]);

  const howData = [
    { icon: "🛒", title: "Choose Products", desc: "Browse and pick your essentials." },
    { icon: "📦", title: "Place Order", desc: "Quick and secure checkout process." },
    { icon: "🚚", title: "Delivered Fast", desc: "Get items within 30 minutes." },
  ];

  const whyData = [
    { icon: "🚀", title: "Fast Delivery", desc: "Lightning-fast doorstep delivery." },
    { icon: "💰", title: "Affordable Prices", desc: "Prices that don’t hurt your pocket." },
    { icon: "📱", title: "Convenience at Your Fingertips", desc: "Order with just a few taps — anytime, anywhere." },
  { icon: "📍", title: "Live Tracking", desc: "Track your orders in real-time from pickup to delivery." },
  ];

  useEffect(() => {  
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
          delay: index * 0.1,
        }
      );
    });
  }, []);

  return (
    <div className="how-why-wrapper">
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="cards">
          {howData.map((item, index) => (
            <div
              className="card"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <span className="emoji">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="why-quickease">
        <h2>Why QuickEase?</h2>
        <div className="cards">
          {whyData.map((item, index) => (
            <div
              className="card"
              key={index + howData.length}
              ref={(el) => (cardsRef.current[index + howData.length] = el)}
            >
              <span className="emoji">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HowAndWhy;
