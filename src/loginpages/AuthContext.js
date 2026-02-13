import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  // ✅ Load user from localStorage first
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("bbc_user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // 🔐 LOGIN
  const login = (userData) => {
    if (!userData) return;

    const formattedUser = {
      name: userData.username || userData.name || "",
      email: userData.email || ""
    };

    setUser(formattedUser);
    localStorage.setItem("bbc_user", JSON.stringify(formattedUser));
  };

  // 🔓 LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("bbc_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
