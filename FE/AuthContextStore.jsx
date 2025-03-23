import axios from "axios";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  const [resumeInfo, setResumeInfo] = useState({
    name: { firstName: "", lastName: "" },

    professionLinks: {
      github: "",
      linkedIn: "",
      email: "",
    },
    summary: "",
    education: {
      collegeName: "",
      year: "",
    },
    skils: {
      languages: [],
      tools: [],
    },
    projects: [],
    experience: [],
  });

  const API = "http://localhost:3000";

  const api = axios.create({
    baseURL: API,
    headers: { "Content-Type": "application/json" },
  });
  let isLoggedIn = !!token;
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  const LogoutUser = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ api, storeTokenInLS, LogoutUser, user, isLoggedIn, resumeInfo, setResumeInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
