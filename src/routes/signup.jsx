import React from "react";
import { Link } from "react-router-dom";
import "../signin.css";

export function action() {}

export function loader() {}

export default function Signup() {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleUserNameChange(e) {
    setUsername(e.target.value);
  }

  return (
    <main className="signin">
      <h1 className="signin__title">Sign up to BloomWeb.</h1>
      <form className="signin__form">
        <input
          className="signin__input"
          type="email"
          placeholder="Email"
          name="email"
          id="emailsignup"
          onChange={handleEmailChange}
          value={email}
          required
        />
        <input
          className="signin__input"
          type="text"
          placeholder="Username"
          name="username"
          id="usernamesignup"
          onChange={handleUserNameChange}
          value={username}
          required
        />
        <input
          className="signin__input"
          type="password"
          placeholder="Password"
          name="password"
          id="passwordsignup"
          onChange={handlePasswordChange}
          value={password}
          required
        />
        <button className="signin__button" type="submit">Sign up</button>
        <span className="signin__alt">Or <Link to="/signin" className="signin__alt-link">sign in</Link></span>
      </form>
    </main>
  );
}
