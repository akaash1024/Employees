import { NavLink } from "react-router";
import { useAuth } from "../AuthContextStore";

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header className="section-navbar">
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">
              <h1>Employee</h1>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              {isLoggedIn ? (
                <li className="nav-item">
                  <NavLink className={"nav-link"} to="/logout">
                    Logout
                  </NavLink>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className={"nav-link"} to="create/personal-details">
                      Create
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={"nav-link"} to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={"nav-link"} to="/register">
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
