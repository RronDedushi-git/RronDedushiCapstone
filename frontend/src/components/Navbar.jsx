import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="brand-logo">
          KZN
        </Link>
      </div>

      <div className="nav-right">
        <Link to="/"><em>Home</em></Link>
        <Link to="/categories"><em>Categories</em></Link>
        <Link to="/about"><em>About</em></Link>
      </div>
    </nav>
  );
}
