import { useAuth } from "../loginpages/AuthContext";
import "./AccountDashboard.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AccountDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // ✅ Redirect SAFELY
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // ⛔ prevent render until user exists
  if (!user) return null;

  return (
    <section className="account-page">

      {/* BACK */}
      {/* <button className="back-btn" onClick={() => navigate(-1)}>
        ← <span>Back</span>
      </button> */}

      {/* HEADER */}
      <div className="account-header">
        <div className="user-info">

          <div className="avatar">
            {user.name?.charAt(0)}
          </div>

          <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>

        </div>
      </div>

      {/* OPTIONS */}
      <div className="account-options">
        <AccountItem icon="fa-user" label="Profile" />
        <AccountItem icon="fa-box" label="Orders" />
        <AccountItem icon="fa-shopping-cart" label="Cart" />
        <AccountItem icon="fa-gear" label="Settings" />
        <AccountItem icon="fa-circle-question" label="Help Center" />

        <div
          className="account-item logout"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          <i className="fas fa-right-from-bracket"></i>
          <span>Logout</span>
        </div>
      </div>

    </section>
  );
}

function AccountItem({ icon, label }) {
  return (
    <div className="account-item">
      <i className={`fas ${icon}`}></i>
      <span>{label}</span>
      <i className="fas fa-chevron-right arrow"></i>
    </div>
  );
}

export default AccountDashboard;
