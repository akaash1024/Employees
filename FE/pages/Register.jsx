import { useState } from "react";
import { useAuth } from "../AuthContextStore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate();

  const { api, storeTokenInLS } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((preValue) => ({ ...preValue, [name]: value }));
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const { data } = await api.post("/api/auth/register", formData);

      console.log("loggine data", data);

      if (data.newUserDetails?.token) {
        console.log("is am i reached here?");

        storeTokenInLS(data.newUserDetails.token);
        toast.success(data.message);
        navigate("/");
      }
    } catch (error) {
      console.error("Register error Akash testing:", error);
      toast.error(
        error.response?.data?.message || "Failed to register. Please try again."
      );
    }
  };
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two--cols">
              <div className="registration-image">
                <img src="/register.png" alt="img" />
              </div>

              <div className="registration-form">
                <h1 className="main-heading">Registration Form</h1>
                <form onSubmit={handleRegisterSubmit}>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

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

                  <button type="submit">Register</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
