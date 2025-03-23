import { NavLink, Outlet } from "react-router";
import { FaUserAlt } from "react-icons/fa";

import { LiaUniversitySolid } from "react-icons/lia";
import { BsPersonWorkspace } from "react-icons/bs";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { GrAchievement } from "react-icons/gr";

export const Resume = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul className="flex">
              <li className="resumeDataform">
                <NavLink to={"personal-details"}>
                 <div className="resumeDataForm--icon">
                   <FaUserAlt />
                 </div>
                  Personal-Details
                </NavLink>
              </li>
              <li className="resumeDataform">
                <NavLink to={"education"}>
                 <div className="resumeDataForm--icon">
                   <LiaUniversitySolid />
                 </div>
                  Education
                </NavLink>
              </li>
              <li className="resumeDataform">
                <NavLink to={"experience"}>
                 <div className="resumeDataForm--icon">
                   <BsPersonWorkspace />
                 </div>
                  Experience
                </NavLink>
              </li>
              <li className="resumeDataform">
                <NavLink to={"project"}>
                 <div className="resumeDataForm--icon">
                   <LiaProjectDiagramSolid />
                 </div>
                  Project
                </NavLink>
              </li>
              <li className="resumeDataform">
                <NavLink to={"achievement"}>
                 <div className="resumeDataForm--icon">
                   <GrAchievement />
                 </div>
                  Achievement
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
