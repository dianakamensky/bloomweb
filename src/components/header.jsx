import { Link } from "react-router-dom";
import React from "react";
import { getCurrentUser } from "../utils";
import { useLocation } from "react-router-dom";

export default function Header() {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const location = useLocation();
    React.useEffect(() => {
      setLoggedIn(getCurrentUser())
    }, [location]);

  return (
    <div className="header">
      <div className="header__main">
        <Link to="/" className="header__logo">
          <h1>BloomWeb</h1>
        </Link>
      </div>

      <nav className="header__nav">
        <Link
          to={`${loggedIn ? "/" : "/signin"}`}
          className="header__nav-link"
        >{`${loggedIn ? "Home" : "Sign in"}`}</Link>
        <Link
          to={`${loggedIn ? "/profile" : "/signup"}`}
          className="header__nav-link"
        >{`${loggedIn ? "Profile" : "Sign up"}`}</Link>
      </nav>
    </div>
  );
}
