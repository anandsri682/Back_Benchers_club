import { useNavigate } from "react-router-dom";
import "./Categories.css";

const categories = [
  { id: "veg", name: "Veg", icon: "🥗" },
  { id: "nonveg", name: "Non-Veg", icon: "🍗" },
  { id: "drinks", name: "Cool Drinks", icon: "🥤" },
  { id: "icecream", name: "Ice Creams", icon: "🍨" },
];

function Categories() {
  const navigate = useNavigate();

  return (
    <section className="category-section">
      <h2 className="category-title">Choose Category</h2>

      <div className="category-row">
        {categories.map(cat => (
          <div
            key={cat.id}
            className="category-card"
            onClick={() => navigate(`/category/${cat.id}`)}
          >
            <span className="cat-icon">{cat.icon}</span>
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
