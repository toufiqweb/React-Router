import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Settings from "./components/Settings/Settings.jsx";
import About from "./components/About/About.jsx";
import User from "./components/User/User.jsx";
import User2 from "./components/User2/User2.jsx";
import UserDescription from "./components/UserDescription/UserDescription.jsx";
import Posts from "./components/Posts/Posts.jsx";
import PostDetail from "./components/Posts/PostDetail.jsx";

const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

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
      { path: "about", Component: About },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: User,
      },
      {
        path: "user2",
        element: (
          <Suspense fallback={<p>loading....</p>}>
            <User2 userPromise={userPromise}></User2>
          </Suspense>
        ),
      },
      {
        path : "users/:userId",
        Component : UserDescription,
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      },
      {
        path :"posts" ,
        loader : () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component : Posts,
      },
      {
        path: "posts/:postId",
        loader : ({params}) => fetch (`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component : PostDetail,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
