import { useAuth } from "../loginpages/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./AdminDashboard.css";

function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <section className="admin-page">

      <div className="admin-header">
        <div className="avatar">
          {user.username?.charAt(0) || "A"}
        </div>
        <div>
          <h3>{user.username || "Admin"}</h3>
          <p>Administrator</p>
        </div>
      </div>

      <div className="admin-options">
        <div className="admin-item">Profile</div>
        <div
  className="admin-item"
  onClick={() => navigate("/admin/products")}
>
  Products
</div>


        <div className="admin-item">Orders</div>
          <div className="admin-item">Manage Products</div>
        <div
  className="admin-item"
  onClick={() => navigate("/admin/products")}
>
  Products
</div>
        
        <div className="admin-item">Settings</div>
        <div className="admin-item">Help</div>

        <div
          className="admin-item logout"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </div>
      </div>

    </section>
  );
}

export default AdminDashboard;
