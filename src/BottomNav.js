import { NavLink } from "react-router-dom";
import "./BottomNav.css";
import { useAuth } from "./loginpages/AuthContext";

function BottomNav() {
    const { user } = useAuth();
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className="bottom-link">
        <i className="fas fa-home"></i>
        <span>Home</span>
      </NavLink>

        <NavLink
  to="/categories"
  className={({ isActive }) =>
    isActive ? "bottom-link active" : "bottom-link"
  }
>
  <i className="fas fa-th-large"></i>
  <span>Categories</span>
</NavLink>


    <NavLink to="/search" className="bottom-link">
  <i className="fas fa-search"></i>
  <span>Search</span>
</NavLink>


      

<NavLink
  to={user ? "/account" : "/login"}
  className="bottom-link"
>
  <i className="fas fa-user"></i>
  <span>Account</span>
</NavLink>



    </nav>
  );
}

export default BottomNav;
