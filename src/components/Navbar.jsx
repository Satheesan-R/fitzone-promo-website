import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpg";


const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const mode = darkMode ? "dark" : "light";

  return (
    <>
      {/* NAVBAR */}
      <nav className={`navbar ${mode}`}>

        {/* LOGO */}
        <div className="nav-brand">
          <img src={logo} alt="logo" className="nav-logo-img" />
          FITNESS <span>SPORTS CENTER</span>
        </div>

        {/* NAV LINKS */}
        <ul className="nav-links">
          {["Home", "About", "Services", "Trainers", "Membership", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* RIGHT BUTTONS */}
        <div className="nav-right">
         
          <button className="btn-join">JOIN NOW</button>

          {/* HAMBURGER */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${mode} ${menuOpen ? "open" : ""}`}>
        {["Home", "About", "Services", "Trainers", "Membership", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;