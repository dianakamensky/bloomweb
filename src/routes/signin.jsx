import React from "react";
import {
  isRouteErrorResponse,
  Navigate,
  useActionData,
  Link,
  Form,
  redirect,
  useRouteError,
} from "react-router-dom";
import api from "../api";

export async function action({ params, request }) {
  const data = await request.formData();
  const objData = Object.fromEntries(data);
  const response = await api.signIn(objData.username, objData.password);
  if (response.token) {
    localStorage.setItem("jwt", response.token);
    localStorage.setItem("userId", response.userId);
  }
  return response;
}

export default function SignIn() {
  const error = useRouteError();
  let errorMessage = undefined;

  if (isRouteErrorResponse(error)) {
    errorMessage = error?.data?.message;
  }

  const response = useActionData();

  if (response === undefined) {
    return (
      <main className="signin">
        <h1 className="signin__title">Sign in to your account.</h1>
        <Form className="signin__form" method="post" action="/signin">
          <input
            className="input"
            type="text"
            placeholder="Username"
            name="username"
            id="usernamesignup"
            required
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            name="password"
            id="passwordsignup"
            required
          />
           {errorMessage && <div className="input__error">{errorMessage}</div>}
          <button className="submitbtn" type="submit">
            Sign in
          </button>
          <span className="signin__alt">
            Or{" "}
            <Link to="/signup" className="signin__alt-link">
              sign up
            </Link>
          </span>
        </Form>
      </main>
    );
  }

  return <Navigate to="/profile"></Navigate>;
}
