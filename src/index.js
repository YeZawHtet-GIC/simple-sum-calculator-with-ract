import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calculator from "./components/Calculator";
import TestUseMemo from "./components/TestUseMemo";
import TestUseRef from "./components/TestUseRef";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Calculator",
        element: <Calculator />,
      },
      {
        path: "/TestUseMemo",
        element: <TestUseMemo />,
      },
      {
        path: "/TestUseRef",
        element: <TestUseRef />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>
);
