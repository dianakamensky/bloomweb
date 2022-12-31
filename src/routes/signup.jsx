import React from "react";
import { Link, redirect, Form, useRouteError, isRouteErrorResponse } from "react-router-dom";
import api from "../api";

export async function action({ params, request }) {
  const data = await request.formData();
  const objData = Object.fromEntries(data);
  await api.signUp(objData.username, objData.password);
  return redirect("/signin");
}

export default function SignUp() {

  const error = useRouteError();
  let errorMessage = undefined;

  if (isRouteErrorResponse(error)) {
    errorMessage = error?.data?.message;
  }

  return (
    <main className="signin">
      <h1 className="signin__title">Sign up to BloomWeb.</h1>
      <Form className="signin__form" method="post">
        <input
          className="input"
          type="text"
          placeholder="Username"
          name="username"
          id="usernamesignup"
          maxLength="25"
          required
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          name="password"
          id="passwordsignup"
          minLength="7"
          maxLength="20"
          required
        />
        {errorMessage && <div className="input__error">{errorMessage}</div>}
        <button className="submitbtn" type="submit">
          Sign up
        </button>
        <span className="signin__alt">
          Or{" "}
          <Link to="/signin" className="signin__alt-link">
            sign in
          </Link>
        </span>
      </Form>
    </main>
  );
}
