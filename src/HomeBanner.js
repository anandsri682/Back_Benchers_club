import "./HomeBanner.css";

function HomeBanner() {
  return (
    <div className="home-wrapper">

      {/* OFFER CARD */}
      <div className="offer-card">
        <span className="offer-badge">20% OFF</span>

        <h2>A different kind of food store</h2>
        <p>Only this week. Don’t miss…</p>

        <div className="price">
          from <span className="old">₹199</span>
          <span className="new"> ₹149</span>
        </div>

        <button className="shop-btn">
          Shop Now →
        </button>
      </div>

      {/* SAFE DELIVERY CARD */}
      <div className="safe-card">
        <h3>100% Secure delivery</h3>
        <p>without contacting the courier</p>

        <button className="green-btn">
          Shop Now
        </button>
      </div>

    </div>
  );
}

export default HomeBanner;
