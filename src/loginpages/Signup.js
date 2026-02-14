import { useState } from "react";
import "./Auth.css";

function Signup() {
  const [data, setData] = useState({
    userName: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation
    if (Object.values(data).some(v => !v.trim())) {
      alert("All fields required");
      return;
    }

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log(data.userName);
    try {
      // 🔥 API CALL
      const res = await fetch("http://192.168.1.112:8080/backbenchersclube.com/api/user/signup", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },

                        //         {
                        //   "userName": "string",
                        //   "mobileNumber": 0,
                        //   "email": "string",
                        //   "password": "string",
                        //   "confirmPassword": "string"
                        // }
        body: JSON.stringify({
          userName: data.userName,
          mobileNumber: data.mobileNumber,
          email: data.email,
          password: data.password,
          confirmPassword:data.confirmPassword
          
        })
      });

      if (!res.ok) {
        throw new Error("Signup failed");
      }
          const text = await res.json();
          alert(text.message);


      // Optional: redirect to login
      window.location.href = "/login";

    } catch (err) {
      alert("Error creating account ❌");
      console.error(err);
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <input
          placeholder="Username"
          value={data.userName}
          onChange={(e) => setData({ ...data, userName: e.target.value })}
        />

        <input
          placeholder="Mobile Number"
          value={data.mobileNumber}
          onChange={(e) => setData({ ...data, mobileNumber: e.target.value })}
        />

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

        <input
          type="password"
          placeholder="Confirm Password"
          value={data.confirm}
          onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
        />

        <button>Create Account</button>

        <p className="switch">
          Already Have Account ? <a href="/login"> Login </a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
