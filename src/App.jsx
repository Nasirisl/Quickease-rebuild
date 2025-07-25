import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import ScootyTop from "./components/ScootyTop";
import Homepage from "./components/Homepage";
import Products from "./components/Products"; // ✅ make sure this path is correct
// import About from "./components/About";       // ✅ optional, if you made this
import Login from "./components/Auth";       // ✅ optional, if you made this
import "./App.css";
import gsap from "gsap";
import ProductDetails from "./components/ProductsDetails";
import About from "./components/About";
import Auth from "./components/Auth";

const App = () => {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (loaderFinished && contentRef.current) {
      gsap.from(contentRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.from(".gsap-nav-item", {
        y: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });
    }
  }, [loaderFinished]);

  return (
    <div className="App">
      {!loaderFinished ? (
        <Loader onFinish={() => setLoaderFinished(true)} />
      ) : (
        <Router>
          <div className="main-content show" ref={contentRef}>
            <Navbar />
            <ScootyTop />
            <div style={{ paddingTop: "10px" }}>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />        
                <Route path="/login" element={<Auth />} />         
                <Route path="/product/:id" element={<ProductDetails/>} />
              </Routes>
            </div>
          </div>
        </Router>
      )}
    </div>
  );
};

export default App;
