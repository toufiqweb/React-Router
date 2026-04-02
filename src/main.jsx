import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Settings from "./components/Settings/Settings.jsx";

const router = createBrowserRouter([
  // {
  //   path : "/",
  //   element : <div> home </div>
  // }

  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "settings", Component: Settings },
      { path: "blogs", Component: Blogs },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
