import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const authorizationToken = `Bearer ${token}`;

  // const API = "http://localhost:3000"
  const API = "https://employees-jez4.onrender.com";

  const api = axios.create({
    baseURL: API,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Interceptor to attach Authorization token dynamically
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); // Get latest token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  let isLoggedIn = !!token;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  const userAuthentication = async () => {
    try {
      setIsLoading(true);

      const { data } = await api.get("/api/auth/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("after login getting this data", data);
      setUser(data.data);
    } catch (error) {
      console.error("Error fetching user data", error);
      setUser(null);
      setToken("");
      localStorage.removeItem("token");
    } finally {
      setIsLoading(false);
    }
  };

  // Logout functionality
  const LogoutUser = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
  };

  // Authentication effect
  useEffect(() => {
    if (token) {
      userAuthentication();
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        api,
        storeTokenInLS,
        isLoggedIn,
        LogoutUser,
        user,
        API,
        authorizationToken,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
