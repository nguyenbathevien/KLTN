import { toast } from "react-toastify";
import http from "../../config/http";

export const login = async (data) => {
  try {
    const response = await http.post("/login", data);
    localStorage.setItem("token", response.data.data);
    toast.success("Login successfully", {
      autoClose: 1000,
      onClose: () => {
        window.location.href = "/";
      },
    });
    return response.data.data;
  } catch (error) {
    toast.error("Login failed", {
      autoClose: 1000,
    });
    throw error.response.data;
  }
};

export const register = async (data) => {
  try {
    await http.post("/user", data);
    toast.success("Register successfully", {
      autoClose: 1000,
      onClose: () => {
        window.location.href = "/login";
      },
    });
  } catch (error) {
    toast.error("Register failed", {
      autoClose: 1000,
    });
    throw error.response.data;
  }
};

export const logout = async () => {
  try {
    localStorage.removeItem("token");
    toast.success("Logout successfully", {
      autoClose: 1000,
      onClose: () => {
        window.location.href = "/";
      },
    });
  } catch (error) {
    toast.error("Logout failed", {
      autoClose: 1000,
    });
    throw error.response.data;
  }
};

export const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return null;
    }
    const response = await http.get("/account", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};
