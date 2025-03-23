import { NavLink, Outlet } from "react-router";

export const Resume = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul className="flex">
              <li className="resumeDataform">
                <NavLink to={"personal-details"}>
                  <h3>Personal Details</h3>
                </NavLink>
              </li>
              <li className="resumeDataform">
                <NavLink to={"education"}>
                  <h3>Education</h3>
                </NavLink>
              </li>
              <li className="resumeDataform">
                <NavLink to={"experience"}>
                  <h3>Experience</h3>
                </NavLink>
              </li>
              <li className="resumeDataform">
                <NavLink to={"project"}>
                  <h3>Project</h3>
                </NavLink>
              </li>
              <li className="resumeDataform">
                <NavLink to={"achievement"}>
                  <h3>Achievement</h3>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

