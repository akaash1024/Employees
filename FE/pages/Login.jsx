import { useState } from "react";
import { useAuth } from "../AuthContextStore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { api, storeTokenInLS } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((preValue) => ({ ...preValue, [name]: value }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/api/auth/login", formData);

      if (data.success && data.userDetails.token) {
        
        storeTokenInLS(data.userDetails.token);
      }

      toast.success(data.message);

      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };
  return (
    <>
      <section>
        <main>
          <div className="section-login">
            <div className="container grid grid-two--cols">
              <div className="login-image">
                <img src="/login.png" alt="img" />
              </div>

              <div className="login-form">
                <h1 className="main-heading">Login Form</h1>
                <form onSubmit={handleLoginSubmit}>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button>Login</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
