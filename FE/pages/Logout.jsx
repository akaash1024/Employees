import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../AuthContextStore";

export const Logout = () => {
  const { LogoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      LogoutUser();

      toast.success("Logged out successfully!");
      navigate("/login");
    }, 50);

    return () => clearTimeout(timer);
  }, [LogoutUser, navigate]);

  return null;
};
