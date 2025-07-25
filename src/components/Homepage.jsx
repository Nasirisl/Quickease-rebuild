// src/components/Homepage.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Homepage.css";
import HowAndWhy from "./Howandwhy";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const logoRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Rotating logo
    gsap.to(logoRef.current, {
      rotation: 360,
      repeat: -1,
      duration: 60,
      ease: "linear",
    });

    // Scroll animations for each section
    sectionsRef.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  const categories = [
    "Milk",
    "Snacks",
    "Beverages",
    "Fruits",
    "Vegetables",
    "Dairy",
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section
        className="hero-section"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <div className="hero-text">
          <h1>
            <strong>QuickEase</strong> – Groceries at Your Doorstep in Just 30
            Minutes!
          </h1>
          <p>
            Shop Smart, Save Time, and Experience Convenience Like Never Before!
          </p>
          <div className="hero-buttons">
            <button className="btn green"><a href="./products" >Browse Products Now!</a></button>
            <button className="btn white"><a href="https://play.google.com/store/apps/details?id=com.hassanjamil.quickease&hl=en" target="_blank" >Download App</a></button>
          </div>
        </div>
        <div className="hero-logo" ref={logoRef}>
          <img src="/quickease.png" alt="QuickEase Logo" id="lg-imgs" />
        </div>
      </section>

      {/* How & Why Section (ref passed via prop) */}
      <HowAndWhy sectionRef={(el) => (sectionsRef.current[1] = el)} />

    {/* Categories Carousel */}
<section
  className="categories-section"
  ref={(el) => (sectionsRef.current[2] = el)}
>
  <h2>Popular Categories</h2>
  <div className="carousel-container">
    <div className="category-cards-carousel">
      {[...categories, ...categories].map((category, i) => {
        const categoryImages = {
          Electronics: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
          Clothing: "https://images.unsplash.com/photo-1521335629791-ce4aec67ddaf",
          Groceries: "https://images.unsplash.com/photo-1586201375761-83865001e17b",
          Beauty: "https://images.unsplash.com/photo-1589216532372-6ad1b3e6c46f",
          Furniture: "https://images.unsplash.com/photo-1582582425714-8478711e7ca0",
          Books: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
        };

        const imageUrl =
          categoryImages[category] ||
          `https://picsum.photos/300/200?random=${i}`;

        return (
          <div
            key={i}
            className="category-card"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          >
            <span className="card-label">{category}</span>
          </div>
        );
      })}
    </div>
  </div>
  <button className="btn see-all"><a href="./products">See All</a></button>
</section>


 {/* Testimonials */}
<section
  className="testimonials-section"
  ref={(el) => (sectionsRef.current[3] = el)}
>
  <h2>What Our Customers Say</h2>
  <div className="testimonials-grid">
    {[
      {
        name: "Ayesha Khan",
        img: "https://randomuser.me/api/portraits/women/68.jpg",
        review: "QuickEase got me snacks in under 20 mins. Life saver! 😍",
      },
      {
        name: "Ali Raza",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        review: "Super easy to use and blazing fast delivery! 🚀",
      },
      {
        name: "Fatima Noor",
        img: "https://randomuser.me/api/portraits/women/45.jpg",
        review: "Love the convenience and variety. Highly recommended! 💯",
      },
      {
        name: "Usman Tariq",
        img: "https://randomuser.me/api/portraits/men/64.jpg",
        review: "The live tracking was a game-changer. I knew exactly when it was coming. 📍",
      },
    ].map((testimonial, i) => (
      <div className="testimonial-card" key={i}>
        <img
          src={testimonial.img}
          alt={testimonial.name}
          className="testimonial-img"
        />
        <p className="testimonial-text">“{testimonial.review}”</p>
        <span className="testimonial-name">- {testimonial.name}</span>
      </div>
    ))}
  </div>
</section>


{/* Footer */}
<footer className="footer">
  <div className="footer-links">
    <a href="#">About</a>
    <a href="#">Contact</a>
    <a href="#">Privacy</a>
  </div>
  <div className="newsletter">
    <input type="email" placeholder="Subscribe to our newsletter" />
    <button>Subscribe</button>
  </div>
  
  {/* All rights reserved line */}
  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} QuickEase. All rights reserved.</p>
  </div>
</footer>

    </div>
  );
};

export default Homepage;
