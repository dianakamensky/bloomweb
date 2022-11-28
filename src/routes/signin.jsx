import React from "react";
import { isRouteErrorResponse } from "react-router-dom";
import { Link, Form, redirect, useRouteError } from "react-router-dom";
import { signIn } from "../api";

export async function action({ params, request }) {
  const data = await request.formData();
  const objData = Object.fromEntries(data);
  await signIn(objData.username, objData.password);
  return redirect("/");
}

export default function SignIn() {
  const error = useRouteError();
  let usernameError = undefined;
  let passwordError = undefined;
  if (isRouteErrorResponse(error)) {
    usernameError =  error?.data?.username;
    passwordError = error?.data?.password;
  }
  return (
    <main className="signin">
      <h1 className="signin__title">Sign in to your account.</h1>
      <Form className="signin__form" method="post">
        <input
          className="input"
          type="text"
          placeholder="Username"
          name="username"
          id="usernamesignup"
          required
        />
        {usernameError && <div className="input__error">{usernameError}</div>}
        <input
          className="input"
          type="password"
          placeholder="Password"
          name="password"
          id="passwordsignup"
          required
        />
        {passwordError && <div className="input__error">{passwordError}</div>}
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
