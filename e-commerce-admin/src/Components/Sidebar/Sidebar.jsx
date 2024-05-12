import React from "react";
import "./Sidebar.css";
import add_product_icon from "../Assets/Product_Cart.svg";
import promotions from "../Assets/promotions.png";
import catalog from "../Assets/catalog.png";
import list_product_icon from "../Assets/Product_list_icon.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/addproduct" style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={add_product_icon} alt="" height={"45px"} />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to="/listproduct" style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={list_product_icon} alt="" height={"45px"} />
          <p>Product List</p>
        </div>
      </Link>

      <Link to="/addpromution" style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={promotions} alt="" height={"45px"} />
          <p>Add Promution</p>
        </div>
      </Link>

      <Link to="/listpromution" style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={catalog} alt="" height={"45px"} />
          <p>List Promution</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
