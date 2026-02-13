import { useState } from "react";
import "./NavbarSearch.css";

const suggestions = [
  "Veg Burger", "Chicken Burger", "Paneer Pizza", "Chicken Pizza",
  "French Fries", "Cheese Fries", "Veg Momos", "Chicken Momos",
  "Veg Meals", "Non-Veg Meals",
  "Cold Coffee", "Chocolate Milkshake", "Coke", "Pepsi",
  "Vanilla Ice Cream", "Chocolate Ice Cream",
  "Sandwich", "Veg Puff", "Chicken Puff", "Brownie"
];

function NavbarSearch({ onSearch }) {
  const [query, setQuery] = useState("");

  const filtered =
    query.length > 0
      ? suggestions.filter(item =>
          item.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  return (
    <div className="navbar-search">

      {/* INPUT */}
      <div className={`search-input ${query ? "active" : ""}`}>
        <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search food..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onSearch && onSearch(e.target.value);
          }}
        />
        {query && (
          <span className="clear" onClick={() => setQuery("")}>×</span>
        )}
      </div>

      {/* SUGGESTIONS */}
      {query && (
        <div className="search-suggestions-box">
          {filtered.length > 0 ? (
            filtered.map((item, i) => (
              <div
                key={i}
                className="suggestion-item"
                onClick={() => {
                  setQuery(item);
                  onSearch && onSearch(item);
                }}
              >
                <i className="fas fa-utensils"></i>
                <span>{item}</span>
              </div>
            ))
          ) : (
            <div className="no-result">No items found</div>
          )}
        </div>
      )}
    </div>
  );
}

export default NavbarSearch;
