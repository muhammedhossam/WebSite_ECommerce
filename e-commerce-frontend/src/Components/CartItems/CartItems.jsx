import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { products, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  const [promo, setPromo] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [promotion, setPromotion] = useState([]);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [promoCodeEntered, setPromoCodeEntered] = useState(false); 

  const allPromotion = () => {
    fetch("http://localhost:4000/allpromution")
      .then((response) => response.json())
      .then((data) => setPromotion(data));
  };

  useEffect(() => {
    allPromotion();
  }, []);

  const changeHandler = (e) => {
    const inputValue = e.target.value;
    const matchedPromotion = promotion.find((item) => item.code.toString() === inputValue);
    if (matchedPromotion) {
      setPromo(matchedPromotion.value);
    } else {
      setPromo(1);
    }
  };

  const getPromotion = () => {
    if (promo > 1) {
      setDiscount(1);
    } else {
      setDiscount(0);
    }
    setSubmitClicked(true);
    setPromoCodeEntered(true);
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img className="cartitems-product-icon" src={e.image} alt="" />
                <p cartitems-product-title>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quatity">{cartItems[e.id]}</button>
                <p>
                  $
                  {discount === 1
                    ? e.new_price * cartItems[e.id] * (1 - (promo / 100))
                    : e.new_price * cartItems[e.id]}
                </p>
                <img
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  className="cartitems-remove-icon"
                  src={cross_icon}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>
                ${discount === 1
                  ? getTotalCartAmount() * (1 - promo / 100)
                  : getTotalCartAmount()}
              </h3>
            </div>
          </div>
          <Link to="/checkout">
            <button>PROCEED TO CHECKOUT</button>
          </Link>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input
              type="text"
              onChange={(e) => {
                changeHandler(e);
              }}
              placeholder="promo code"
              disabled={promoCodeEntered} 
            />
            <button onClick={() => getPromotion()} disabled={promoCodeEntered}>
              Submit
            </button>
          </div>
          {submitClicked && promo > 1 && <p>Discount: {promo}%</p>}
        </div>
      </div>
    </div>
  );
};

export default CartItems;
