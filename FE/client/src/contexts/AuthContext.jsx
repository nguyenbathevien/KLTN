import React, { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser, login, logout } from "../services/auth.services";

// Tạo AuthContext
const AuthContext = createContext();

// Provider quản lý xác thực
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Gọi API login và cập nhật user
  const handleLogin = async (data) => {
    try {
      const userData = await login(data);
      setUser(userData);
    } catch (error) {
      console.error(error);
    }
  };

  // Gọi API logout
  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  // Lấy thông tin user khi load trang
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook để sử dụng AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
