import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpg";


const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const mode = darkMode ? "dark" : "light";

  return (
    <>
      <nav className={`navbar ${mode}`}>

        <div className="nav-brand">
          <img src={logo} alt="logo" className="nav-logo-img" />
          FITNESS <span>SPORTS CENTER</span>
        </div>

      
        <ul className="nav-links">
          {["Home", "About", "Services", "Trainers", "Membership", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
         
          <button className="btn-join">JOIN NOW</button>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </nav>

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