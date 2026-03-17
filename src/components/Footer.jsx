import { useState } from "react";
import "./Footer.css";

const Footer = ({ darkMode }) => {
  const mode = darkMode ? "dark" : "light";
  const [email, setEmail] = useState("");

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Thanks for subscribing with ${email}! 🎉`);
      setEmail("");
    }
  };

  return (
    <footer className={`footer ${mode}`}>
      <div className="container">
        <div className="footer-grid">

          {/* BRAND */}
          <div>
            <div className="footer-brand-name">
              FITNESS <span>SPORTS CENTER</span>
            </div>
            <p className="footer-brand-desc">
              Transforming lives through premium fitness experiences.
              Join us and discover your full potential.
            </p>
            <div className="social-links">
              {["FB", "TW", "IG", "YT"].map((s) => (
                <a key={s} href="#" className="social-btn">{s}</a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <p className="footer-heading">Quick Links</p>
            <a href="#home">Home Page</a>
            <a href="#services">Our Services</a>
            <a href="#about">About Us</a>
            <a href="#trainers">Expert Trainers</a>
          </div>

          {/* MEMBERSHIP LINKS */}
          <div className="footer-col">
            <p className="footer-heading">Membership</p>
            <a href="#membership">Basic Membership</a>
            <a href="#membership">Pro Membership</a>
            <a href="#membership">Elite Membership</a>
            <a href="#membership">Corporate Plans</a>
          </div>

          {/* NEWSLETTER */}
          <div>
            <p className="footer-heading">Newsletter</p>
            <p className="newsletter-desc">
              Get fitness tips and updates
            </p>
            <form onSubmit={handleNewsletter}>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  JOIN
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <p>© 2024 FITNESS SPORTS CENTER. ALL RIGHTS RESERVED.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;