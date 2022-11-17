import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Index, {loader as indexLoader, action as indexAction } from "./routes/index";
import Profile, {loader as profileLoader} from "./routes/profile";
import SignUp, {loader as signUpLoader, action as signUpAction} from "./routes/signup";
import SignIn, {loader as signInLoader, action as signInAction} from "./routes/signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
            loader: indexLoader,
            action: indexAction,
          },
          {
            path: "/profile",
            element: <Profile />,
            loader: profileLoader
          },
          {
            path: "/signup",
            element: <SignUp/>,
            loader: signUpLoader,
            action: signUpAction
          },
          {
            path: "/signin",
            element: <SignIn/>,
            loader: signInLoader,
            action: signInAction
          }
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
