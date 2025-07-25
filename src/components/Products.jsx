// Products.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "./Products.css";
import productsData from "./productsData";

const Products = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const allProducts = productsData.flatMap((group) => group.items);
  const categories = productsData.map((group) => group.category);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesPrice =
      priceFilter === "low"
        ? parseFloat(product.price) < 60
        : priceFilter === "high"
        ? parseFloat(product.price) >= 60
        : true;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }
      );
    }
  }, [filteredProducts]);

  return (
    <div className="products-page">
      <h2 className="products-title">All Products</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
          <option value="">All Prices</option>
          <option value="low">Below 60 PKR</option>
          <option value="high">60 PKR & Above</option>
        </select>
      </div>

      <div className="product-grid" ref={containerRef}>
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="product-card"
            onClick={() => navigate(`/product/${index}`, { state: { product } })}
          >
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>Rs. {product.price}</p>
              <button onClick={(e) => {
              e.stopPropagation(); // prevent triggering the product details
              navigate("/login");
            }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
