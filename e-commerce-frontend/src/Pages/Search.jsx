import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css"; // Import your other CSS file if needed
import Item from "../Components/Item/Item";
import "./CSS/Search.css";
const Search = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedProduct, setSearchedProduct] = useState(null);

  const fetchAllProducts = () => {
    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    // Find the product that matches the search query
    const foundProduct = allProducts.find(
      (product) => product.name.toLowerCase() === searchQuery.toLowerCase()
    );

    // Update searchedProduct state
    setSearchedProduct(foundProduct);
  };

  return (
    <div className="shopcategory">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a product..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button onClick={handleSearchSubmit} className="search-button">
          Search
        </button>
      </div>
      {searchedProduct ? (
        <div className="searched-product">
          <Item
            id={searchedProduct.id}
            name={searchedProduct.name}
            image={searchedProduct.image}
            new_price={searchedProduct.new_price}
            old_price={searchedProduct.old_price}
          />
        </div>
      ) : (
        <div className="no-product-message">
          {searchQuery && <p>No product found for "{searchQuery}"</p>}
        </div>
      )}
    </div>
  );
};
export default Search;
