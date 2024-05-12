import React, { useState, useEffect } from "react";
import cross_icon from "../Assets/cross_icon.png";
import "./ListPromution.css";

const Promution = () => {
  const [allPromution, setAllPromution] = useState([]);

  const fetchInfo = () => {
    fetch("http://localhost:4000/allpromution")
      .then((res) => res.json())
      .then((data) => setAllPromution(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removePromution = async (code) => {
    await fetch("http://localhost:4000/removepromution", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: code }),
    });

    fetch("http://localhost:4000/allpromution")
      .then((res) => res.json())
      .then((data) => setAllPromution(data));
  };

  return (
    <div className="listpromutin">
      <h1>All Promution List</h1>
      <div className="listpromutin-format-main">
        <p>Code</p>
        <p>Value</p>
        <p>Remove</p>
      </div>
      <div className="listpromutin-allproducts">
        <hr />
        {allPromution.map((e) => {
          return (
            <div>
              <div className="listpromutin-format-main listpromutin-format">
                <p cartitems-product-title>{e.code}</p>
                <p>{e.value}</p>
                <img
                  className="listpromutin-remove-icon"
                  onClick={() => {
                    removePromution(e.code);
                  }}
                  src={cross_icon}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Promution;
