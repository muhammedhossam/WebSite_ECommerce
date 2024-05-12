import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import scar from "../Assets/logo1922.png";
import cart_icon from "../Assets/cart_icon.png";
import devil from "../Assets/devil.png";
import search from "../Assets/search.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [image, setImage] = useState("0");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  return (
    <div className="navbar">
      <div
        className="nav-logo"
        onMouseOver={() => setImage("1")}
        onMouseLeave={() => setImage("0")}
      >
        <img src={image === "1" ? devil : scar} alt="" width="50px" />
        <p>{image === "1" ? "SCREAM" : "DEAD"}</p>
      </div>
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="womens">
            Women
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        <Link to="/Search">
          <img src={search} alt="" height={"50px"} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
