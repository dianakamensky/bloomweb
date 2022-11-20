import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./components/error-page";
import Index, {loader as indexLoader } from "./routes/index";
import Profile, {loader as profileLoader, action as profileAction} from "./routes/profile";
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
          },
          {
            path: "/profile",
            element: <Profile />,
            loader: profileLoader,
            action: profileAction
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
