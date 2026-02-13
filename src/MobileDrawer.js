import { NavLink, useNavigate } from "react-router-dom";

import "./MobileDrawer.css";
import { useAuth } from "./loginpages/AuthContext";

function MobileDrawer({ open, onClose }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    onClose();
    navigate("/login");
  };

  return (
    <>
      {/* OVERLAY */}
      <div
        className={`drawer-overlay ${open ? "show" : ""}`}
        onClick={onClose}
      ></div>

      {/* LEFT DRAWER */}
      <aside className={`mobile-drawer ${open ? "open" : ""}`}>

     {user && (
  <div
    className="drawer-user"
    onClick={() => {
      onClose();
      navigate("/account");
    }}
    style={{ cursor: "pointer" }}
  >
    <div className="drawer-avatar">
      {user.name.charAt(0).toUpperCase()}
    </div>
    <div>
      <h4>{user.name}</h4>
      {/* <p>{user.email}</p> */}
    </div>
  </div>
)}


        {/* HEADER */}
        {/* <div className="drawer-header">
          <button onClick={onClose}>
            Close <span>✕</span>
          </button>
        </div> */}

        {/* LINKS */}
        <nav className="drawer-links">

          <NavLink to="/" onClick={onClose}>
            <i className="fas fa-home"></i>
            <span>Home</span>
          </NavLink>

          <NavLink to="/about" onClick={onClose}>
            <i className="fas fa-info-circle"></i>
            <span>About</span>
          </NavLink>

          <NavLink to="/contact" onClick={onClose}>
            <i className="fas fa-phone"></i>
            <span>Contact</span>
          </NavLink>

          <NavLink to="/cart" onClick={onClose}>
            <i className="fas fa-shopping-cart"></i>
            <span>Cart</span>
          </NavLink>

          {/* LOGIN / LOGOUT */}
          {user ? (
            <button className="drawer-link logout" onClick={handleLogout}>
              <i className="fas fa-right-from-bracket"></i>
              <span>Logout</span>
            </button>
          ) : (
            <NavLink
              className="drawer-link"
              to="/login"
              onClick={onClose}
            >
              <i className="fas fa-user"></i>
              <span>Login</span>
            </NavLink>
          )}
        </nav>
      </aside>
    </>
  );
}

export default MobileDrawer;
