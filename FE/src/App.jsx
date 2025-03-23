import { createBrowserRouter, RouterProvider } from "react-router";
import { AppLayout } from "../components/AppLayout";
import { ErrorPage } from "../pages/ErrorPage";
import { AuthProvider } from "../AuthContextStore";

import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { ToastContainer } from "react-toastify";
import { Resume } from "../pages/Resume";

import { Experience } from "../pages/ResumeComponents/Experience";
import { Education } from "../pages/ResumeComponents/Education";
import { Project } from "../pages/ResumeComponents/Project";
import { PersonalDetails } from "../pages/ResumeComponents/PersonalDetails";
import { Achievement } from "../pages/ResumeComponents/Achievement";
import { EmployeeDashboard } from "../pages/EmployeeDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <EmployeeDashboard />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/create",
        element: <Resume />,
        children: [
          { path: "personal-details", element: <PersonalDetails /> },
          { path: "education", element: <Education /> },
          { path: "experience", element: <Experience /> },
          { path: "project", element: <Project /> },
          { path: "achievement", element: <Achievement /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          bodyClassName="toastBody"
        />
      </AuthProvider>
    </>
  );
};

export default App;
