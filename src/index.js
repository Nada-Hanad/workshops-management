import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegistrationPage from "./components/registrationPage";
import DashboardPage from "./components/dashboardPage";
import WorkshopDetails from "./components/workshopDetails";
import "./App.css";
import CreateWorkshop from "./components/createWorkshop";
import StudentRegistrationPage from "./components/studentRegistration";
import StudentDashboardPage from "./components/studentDashboard";
import StudentWorkshopRegistrationPage from "./components/studentWorkshopRegistration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StudentRegistrationPage />,
  },
  {
    path: "/admin",
    element: <RegistrationPage />,
  },

  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/workshopDetails",
    element: <WorkshopDetails />,
  },
  {
    path: "/createWorkshop",
    element: <CreateWorkshop />,
  },
  {
    path: "/studentDashboard",
    element: <StudentDashboardPage />,
  },
  {
    path: "/registerInWorkshop",
    element: <StudentWorkshopRegistrationPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
