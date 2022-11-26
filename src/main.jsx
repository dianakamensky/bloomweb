import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./components/error-page";
import Index, {loader as indexLoader } from "./routes/index";
import Profile, {loader as profileLoader, action as profileAction} from "./routes/profile";
import SignUp, {loader as signUpLoader, action as signUpAction} from "./routes/signup";
import SignIn, {loader as signInLoader, action as signInAction} from "./routes/signin";
import { action as postCommentAction } from "./routes/postcomment";
import {action as savePostAction} from "./components/savebutton";
import MyPosts, {loader as myPostsLoader} from "./routes/myposts";
import Saved, {loader as savedLoader} from "./routes/saved";
import {action as deletePostAction} from "./components/deletebutton";

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
            action: profileAction,
            children: [{
              index: true,
              element: <MyPosts/>,
              loader: myPostsLoader,
          },
        {
          path: "saved",
          element: <Saved/>,
          loader: savedLoader
        }]
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
          },
          {
            path: "/:postid/comment",
            action: postCommentAction,
          },
          {
            path: "/:postid/save",
            action: savePostAction,
          },
          {
            path: "/:postid/delete",
            action: deletePostAction,
          },
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
