import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";
import { FaStar } from "react-icons/fa";
const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [rating, SetRating] = useState(product.rating);
  const [color, SetColor] = useState();
  const [selectedSize, setSelectedSize] = useState(null);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt="img"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          {[...Array(5)].map((star, index) => {
            const currRate = index + 1;
            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={currRate}
                  onClick={() => SetRating(currRate)}
                  style={{ appearance: "none" }}
                />
                <FaStar
                  size={30}
                  color={currRate <= (color || rating) ? "#e06236" : "grey"}
                />
              </label>
            );
          })}
          <p>{rating}</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-buttons">
            <button
              className={selectedSize === "S" ? "selected" : ""}
              onClick={() => setSelectedSize("S")}
            >
              S
            </button>
            <button
              className={selectedSize === "M" ? "selected" : ""}
              onClick={() => setSelectedSize("M")}
            >
              M
            </button>
            <button
              className={selectedSize === "L" ? "selected" : ""}
              onClick={() => setSelectedSize("L")}
            >
              L
            </button>
            <button
              className={selectedSize === "XL" ? "selected" : ""}
              onClick={() => setSelectedSize("XL")}
            >
              XL
            </button>
            <button
              className={selectedSize === "XXL" ? "selected" : ""}
              onClick={() => setSelectedSize("XXL")}
            >
              XXL
            </button>
          </div>
        </div>
        <button
          className="Add-to-cart"
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category :</span> Women, T-shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
