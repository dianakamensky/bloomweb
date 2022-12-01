import { Link } from "react-router-dom";
import React from "react";
import { useAuth } from "../hooks/authprovider";

export default function Header() {
    const {loggedIn} = useAuth();

  return (
    <div className="header">
      <div className="header__main">
        <Link to="/" className="header__logo">
          <h1>BloomWeb</h1>
        </Link>
      </div>

      <nav className="header__nav">
        <Link
          to={`${loggedIn() ? "/" : "/signin"}`}
          className="header__nav-link"
        >{`${loggedIn() ? "Home" : "Sign in"}`}</Link>
        <Link
          to={`${loggedIn() ? "/profile" : "/signup"}`}
          className="header__nav-link"
        >{`${loggedIn() ? "Profile" : "Sign up"}`}</Link>
      </nav>
    </div>
  );
}
