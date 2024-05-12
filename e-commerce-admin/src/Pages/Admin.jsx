import React from "react";
import "./CSS/Admin.css";
import Sidebar from "../Components/Sidebar/Sidebar";
import AddProduct from "../Components/AddProduct/AddProduct";
import AddPromution from "../Components/AddPromution/Promution";
import Listpromution from "../Components/ListPromution/Promution";
import { Route, Routes } from "react-router-dom";
import ListProduct from "../Components/ListProduct/ListProduct";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
        <Route path="/addpromution" element={<AddPromution />} />
        <Route path="/listpromution" element={<Listpromution />} />
      </Routes>
    </div>
  );
};

export default Admin;
