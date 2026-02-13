import "./Footer.css";

function Footer() {
  return (
    <footer className="bb-footer">
      <div className="bb-footer-container">

        {/* LEFT */}
        <div className="bb-footer-brand">
          <h2 className="bb-logo">BackBenchers</h2>
          <p>
            Fresh & tasty food delivered fast.  
            Order your favorite meals anytime.
          </p>

          <div className="bb-social">
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
          </div>
        </div>

        {/* LINKS */}
        <div className="bb-footer-links">

          <div>
            <h4>About</h4>
            <ul>
              <li>About Us</li>
              <li>Features</li>
              <li>Menu</li>
              <li>News</li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>Why BackBenchers?</li>
              <li>Partner With Us</li>
              <li>FAQ</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li>Account</li>
              <li>Support Center</li>
              <li>Feedback</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h4>Get in Touch</h4>
            <p className="touch-text">
              Question or feedback?  
              We’d love to hear from you.
            </p>

            <div className="bb-input-box">
              <input type="email" placeholder="Email Address" />
              <button>➤</button>
            </div>
          </div>

        </div>
      </div>

      <div className="bb-footer-bottom">
        © 2026 BackBenchers Club. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
