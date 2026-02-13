import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./Auth.css";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      alert("All fields required");
      return;
    }

    try {
      const res = await fetch(
        "http://192.168.1.120:8080/backbenchersclube.com/api/user/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include",
          body: JSON.stringify({
            email: data.email,
            password: data.password
          })
        }
      );

      const result = await res.json();

      if (res.ok && result.success === true) {
        console.log("Login success:", result.userName);

        // ✅ MAP BACKEND RESPONSE PROPERLY
        login({
          name: result.userName,   // 🔥 IMPORTANT
          email: data.email
        });

        navigate("/account");
      } else {
        alert(result.message || "Invalid credentials ❌");
      }

    } catch (err) {
      console.error("Login error:", err);
      alert("Server not reachable ❌");
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Sign In</h2>

        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button type="submit">Login</button>

        <p className="switch">
  New user? <NavLink to="/signup">Create account</NavLink>
</p>

      </form>
    </div>
  );
}

export default Login;
