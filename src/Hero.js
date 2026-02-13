import { useEffect, useState } from "react";
import "./Hero.css";
import foodImg from "./hero-four_img1.png"; // <-- put your image here

function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [showBottom, setShowBottom] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 1200);

    const onScroll = () => {
      if (window.scrollY > 150) {
        setShowBottom(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <section className="hero-section">
      <div className="hero-content">
        
        {/* LEFT TEXT */}
        <div className="hero-text">
          <span className="hero-off">20% Off</span>
          <h1>
            Enjoy Our <br />
            <span>Delicious</span> Food
          </h1>
          <p className="hero-sub">HOT FOR EVERY SUNDAY</p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <img src={foodImg} alt="Delicious Food" />
        </div>

      </div>

      {/* BOTTOM TEXT (SCROLL ANIMATION) */}
      <div className={`hero-bottom ${showBottom ? "show" : ""}`}>
        Fresh • Spicy • Hygienic • Affordable
      </div>
    </section>
  );
}

export default Hero;
