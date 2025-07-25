import React from "react";
import { useLocation } from "react-router-dom";
import "./ProductsDetails.css";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <div style={{ padding: "2rem" }}>Product not found.</div>;
  }

  return (
    <div className="product-details">
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="details">
        <h2>{product.name}</h2>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> Rs. {product.price}</p>
        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
