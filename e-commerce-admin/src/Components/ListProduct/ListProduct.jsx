import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../Assets/cross_icon.png";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const [oldPrice, setOldPrice] = useState();
  const [newPrice, setNewPrice] = useState();

  const fetchInfo = () => {
    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  const updateProduct = async (
    id,
    title,
    old_price,
    new_price,
    cat,
    rate,
    image
  ) => {
    await fetch("http://localhost:4000/updateproduct", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        name: title,
        image: image,
        old_price: old_price,
        new_price: new_price,
        category: cat,
        rating: rate,
      }),
    });

    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  const changeHandlerNew = (e) => {
    setNewPrice(parseInt(e.target.value));
  };
  const changeHandlerOld = (e) => {
    setOldPrice(parseInt(e.target.value));
  };

  return (
    <div className="listproduct">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((e) => {
          return (
            <div>
              <div className="listproduct-format-main listproduct-format">
                <img
                  className="listproduct-product-icon"
                  src={e.image}
                  alt=""
                />
                <p cartitems-product-title>{e.name}</p>
                <p>${e.old_price}</p>
                <p>${e.new_price}</p>
                <p>{e.category}</p>
                <img
                  className="listproduct-remove-icon"
                  onClick={() => {
                    removeProduct(e.id);
                  }}
                  src={cross_icon}
                  alt=""
                />
                <button
                  onClick={() => {
                    updateProduct(
                      e.id,
                      e.name,
                      oldPrice,
                      newPrice,
                      e.category,
                      e.rating,
                      e.image
                    );
                  }}
                >
                  Update
                </button>
                {/* <label htmlFor="">Title</label>
                <input type="text" placeholder=""></input>
                <label htmlFor="">Category</label>
                <input type="number" placeholder=""></input> */}
                <input
                  type="number"
                  onChange={changeHandlerOld}
                  placeholder="Change Old Price"
                ></input>
                <input
                  type="number"
                  onChange={changeHandlerNew}
                  placeholder="Change New Price"
                ></input>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
