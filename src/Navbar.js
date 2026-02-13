import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import MobileDrawer from "./MobileDrawer";
import NavbarSearch from "./NavbarSearch";
import { useAuth } from "./loginpages/AuthContext";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { user } = useAuth();
  const navigate = useNavigate();

  /* =========================
     LOAD CART COUNT
  ========================= */
  const loadCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};
    const total = Object.values(cart).reduce(
      (sum, item) => sum + item.qty,
      0
    );
    setCartCount(total);
  };

  useEffect(() => {
    loadCartCount();

    // listen cart changes
    window.addEventListener("storage", loadCartCount);

    return () => {
      window.removeEventListener("storage", loadCartCount);
    };
  }, []);

  return (
    <>
      <nav className="navbar fixed-top custom-navbar">
        <div className="container navbar-inner">

          {/* BRAND */}
          <NavLink className="logo" to="/">
            <span className="brand-icon">
              <i className="fas fa-utensils"></i>
            </span>
            <span className="brand-text">Back Benchers Club</span>
          </NavLink>

          {/* DESKTOP MENU */}
          <ul className="navbar-nav d-none d-lg-flex align-items-center ms-auto">

            <li className="nav-item me-3">
              <NavbarSearch />
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>

            {/* CART ICON DESKTOP */}
            <li className="nav-item">
              <NavLink className="nav-link cart-desktop" to="/cart">
                <i className="fas fa-shopping-cart"></i>
                {cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}
              </NavLink>
            </li>

            {/* USER / LOGIN */}
            <li className="nav-item ms-3">
              {user ? (
                <div
                  className="nav-user"
                  onClick={() => navigate("/account")}
                >
                  <div className="nav-avatar">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                  <span className="nav-username">{user.name}</span>
                </div>
              ) : (
                <NavLink className="login-btn" to="/login">
                  Login
                </NavLink>
              )}
            </li>

          </ul>

          {/* MOBILE ICONS */}
          <div className="d-flex align-items-center gap-3 d-lg-none">
            <NavLink to="/cart" className="cart-icon">
              <i className="fas fa-shopping-cart"></i>
              {cartCount > 0 && (
                <span className="cart-count">{cartCount}</span>
              )}
            </NavLink>

            <button
              className="navbar-toggler"
              onClick={() => setDrawerOpen(prev => !prev)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

        </div>
      </nav>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}

export default Navbar;