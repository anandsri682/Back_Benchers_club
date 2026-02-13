import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./Search.css";

const SUGGESTIONS = [
  "Veg Burger", "Chicken Burger", "Paneer Pizza", "Chicken Pizza",
  "French Fries", "Veg Momos", "Chicken Momos",
  "Cold Coffee", "Milkshake", "Ice Cream",
  "Veg Meals", "Non Veg Meals",
  "Sandwich", "Veg Puff", "Chicken Puff",
  "Coke", "Pepsi", "Brownie", "Donut", "Pizza Fries"
];

function Search() {
//   const navigate = useNavigate();
  const [query, setQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const results =
    query.length > 0
      ? SUGGESTIONS.filter(item =>
          item.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  return (
    <div className="search-page">

      {/* HEADER */}
      <div className="search-header">
        {/* <button className="back-btn" onClick={() => navigate(-1)}>← Back</button> */}

        <div className="search-box">
          <i className="fas fa-search"></i>
          <input
            autoFocus
            placeholder="Search food..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <span className="clear" onClick={() => setQuery("")}>×</span>
          )}
        </div>
      </div>

      {/* BODY */}
      <div className="search-body">
        {query === "" ? (
          <p className="search-hint">Search your favorite food 🍔</p>
        ) : results.length > 0 ? (
          results.map((item, i) => (
            <div key={i} className="search-item">
              <i className="fas fa-utensils"></i>
              <span>{item}</span>
            </div>
          ))
        ) : (
          <p className="no-result">No items found</p>
        )}
      </div>

    </div>
  );
}

export default Search;
