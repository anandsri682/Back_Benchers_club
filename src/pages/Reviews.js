import { useState } from "react";
import "./Reviews.css";

function Reviews() {
  const [paused, setPaused] = useState(false);

  const reviews = [
    { text: "Best fast food spot! Taste and vibes are amazing.", name: "Anand", role: "Student" },
    { text: "Affordable prices with premium taste. Loved it!", name: "Sneha", role: "Food Blogger" },
    { text: "Perfect hangout place with friends after college.", name: "Rahul", role: "Customer" },
    { text: "Quick service and tasty snacks. Highly recommended!", name: "Priya", role: "Customer" },
  ];

  return (
    <section className="reviews-section">
      <h2 className="reviews-title">What Our Customers Say</h2>

      <div className={`reviews-slider ${paused ? "paused" : ""}`}>
        <div className="reviews-track">
          {[...reviews, ...reviews].map((r, i) => (
            <div
              key={i}
              className="review-card"
              onClick={() => setPaused(prev => !prev)}
            >
              <p>“{r.text}”</p>
              <h6>{r.name}</h6>
              <span>{r.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
