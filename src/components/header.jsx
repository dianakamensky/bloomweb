
import { useLocation, Link } from "react-router-dom";
import SearchForm from "./searchform";

export default function Header() {
    let signedIn = false;
    let location = useLocation();
    
    return (
        <div className="header">
            <div className="header__main">
        <Link to="/" className="header__logo"><h1>BloomWeb</h1></Link>
        </div>
     
        <nav className="header__nav">
        <Link to={`${signedIn ? "/" : "/signin"}`} className="header__nav-link">{`${signedIn ? "Home" : "Sign in"}`}</Link>
        <Link to={`${signedIn ? "/profile" : "/signup"}`} className="header__nav-link">{`${signedIn ? "Profile" : "Sign up"}`}</Link>
        </nav>
        </div>
    )
}