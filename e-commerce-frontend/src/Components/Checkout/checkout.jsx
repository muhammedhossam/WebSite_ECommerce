// Checkout.js

import React, { useState, useContext } from "react";
import "./checkout.css";
import fawryLogo from "../Assets/Fawry.png";
import instapayLogo from "../Assets/instapay.png";
import mastercardLogo from "../Assets/mastercard.png";
import visaLogo from "../Assets/visacard.jpg";
import { ShopContext } from "../../Context/ShopContext";

const Checkout = () => {
  const [paymentMethods, setPaymentMethods] = useState({
    fawry: false,
    visa: false,
    instapay: false,
    mastercard: false,
  });

  const { products, cartItems, removeFromCart } = useContext(ShopContext);

  const handlePaymentMethodClick = (method) => {
    setPaymentMethods({
      ...paymentMethods,
      [method]: !paymentMethods[method],
    });
  };

  const isPaymentMethodSelected = () => {
    return Object.values(paymentMethods).some((method) => method === true);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    products.forEach((product) => {
      if (cartItems[product.id] > 0) {
        for (let i = 0; i < 300; i++) {
          if (cartItems[product.id] > 0) {
            removeFromCart(product.id);
          }
        }
      }
    });
    alert("Purchase Successfuly!");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form className="checkout-form" onSubmit={handlePlaceOrder}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />

        <h3>Shipping Address</h3>
        <input type="text" id="name" name="name" placeholder="Name" required />
        <input
          type="text"
          id="shipping-address"
          name="shipping-address"
          placeholder="Address"
          required
        />
        <select id="united-nation" name="united-nation" required>
          <option value="Egypt">Egypt</option>
          <option value="Morocco">Morocco</option>
          <option value="Palestine">Palestine</option>
        </select>

        <h3>Card Information</h3>
        <input
          type="text"
          id="card-number"
          name="card-number"
          placeholder="1234 1234 1234 1234"
          required
        />
        <input
          type="text"
          id="expiry-date"
          name="expiry-date"
          placeholder="MM/YY"
          required
        />
        <input type="text" id="cvc" name="cvc" placeholder="CVC" required />

        <h3>Payment Method</h3>
        <div className="payment-methods">
          <button
            type="button"
            className={`payment-method-button ${
              paymentMethods.fawry ? "selected" : ""
            }`}
            onClick={() => handlePaymentMethodClick("fawry")}
          >
            <img src={fawryLogo} alt="Fawry" />
          </button>
          <button
            type="button"
            className={`payment-method-button ${
              paymentMethods.visa ? "selected" : ""
            }`}
            onClick={() => handlePaymentMethodClick("visa")}
          >
            <img src={visaLogo} alt="Visa" />
          </button>
          <button
            type="button"
            className={`payment-method-button ${
              paymentMethods.instapay ? "selected" : ""
            }`}
            onClick={() => handlePaymentMethodClick("instapay")}
          >
            <img src={instapayLogo} alt="Instapay" />
          </button>
          <button
            type="button"
            className={`payment-method-button ${
              paymentMethods.mastercard ? "selected" : ""
            }`}
            onClick={() => handlePaymentMethodClick("mastercard")}
          >
            <img src={mastercardLogo} alt="MasterCard" />
          </button>
        </div>

        <button type="submit" disabled={!isPaymentMethodSelected()}>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
