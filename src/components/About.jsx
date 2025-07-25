import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef();
  const timelineRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial fade-in
      gsap.fromTo(
        aboutRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );

      // Timeline items animation
      timelineRefs.current.forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 100 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert(); // Clean up GSAP context
  }, []);

  const timelineData = [
    { year: "2022", description: "QuickEase was founded with a mission to simplify local deliveries." },
    { year: "2023", description: "Grew to 5 cities and served 50,000+ happy customers." },
    { year: "2024", description: "Launched scooter delivery fleet and app upgrade." },
    { year: "2025", description: "Expanding into groceries and real-time delivery tracking." },
  ];

  return (
    <div className="about-page" ref={aboutRef}>
      <section className="about-hero">
        <h1>About QuickEase</h1>
        <p>Making deliveries faster, smarter, and easier for everyone.</p>
      </section>

      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          QuickEase started with a mission to redefine the way logistics work. We saw how much
          time and energy was being wasted in inefficient systems, so we built a better one.
        </p>
      </section>

      <section className="vision-values">
        <h2>Our Vision & Values</h2>
        <ul>
          <li>🚀 Speed & Reliability</li>
          <li>💚 Customer First</li>
          <li>🔍 Transparency</li>
          <li>🌍 Sustainable Practices</li>
        </ul>
      </section>

      <section className="timeline">
        <h2>Our Journey</h2>
        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <div
              className="timeline-item"
              key={index}
              ref={(el) => (timelineRefs.current[index] = el)}
            >
              <div className="year">{item.year}</div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
