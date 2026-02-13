import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-us py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold mb-4">About Back Benchers Club</h2>

            <p className="text-muted mb-4">
              Back Benchers Club is a fun-filled fast food center inspired by
              college life. We serve tasty, affordable, and hygienic food that
              makes every hangout special.
            </p>

            <div className="row">
              <div className="col-md-6">
                <h5 className="text-primary">Our Mission</h5>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-check-circle me-2 text-primary"></i>
                    Tasty & Fresh Food
                  </li>
                  <li>
                    <i className="bi bi-check-circle me-2 text-primary"></i>
                    Student-Friendly Prices
                  </li>
                  <li>
                    <i className="bi bi-check-circle me-2 text-primary"></i>
                    Quick Service
                  </li>
                </ul>
              </div>

              <div className="col-md-6">
                <h5 className="text-primary">Our Vision</h5>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-bullseye me-2 text-primary"></i>
                    Favorite Hangout Spot
                  </li>
                  <li>
                    <i className="bi bi-bullseye me-2 text-primary"></i>
                    Quality & Hygiene
                  </li>
                  <li>
                    <i className="bi bi-bullseye me-2 text-primary"></i>
                    Happy Customers
                  </li>
                </ul>
              </div>
            </div>

            <button className="btn btn-primary mt-4">Learn More</button>
          </div>

          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="About Back Benchers Club"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        <div className="row mt-5 text-center">
          <div className="col-md-3 col-6 mb-4">
            <i className="bi bi-people fs-1 text-primary"></i>
            <h2 className="fw-bold">500+</h2>
            <p className="text-muted">Happy Customers</p>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <i className="bi bi-egg-fried fs-1 text-primary"></i>
            <h2 className="fw-bold">50+</h2>
            <p className="text-muted">Food Items</p>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <i className="bi bi-star fs-1 text-primary"></i>
            <h2 className="fw-bold">4.8</h2>
            <p className="text-muted">Rating</p>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <i className="bi bi-shop fs-1 text-primary"></i>
            <h2 className="fw-bold">1</h2>
            <p className="text-muted">Outlet</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
