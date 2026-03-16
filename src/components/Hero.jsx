import "./Hero.css";
import logo from "../assets/hero-bg.jpeg";

const Hero = ({ darkMode }) => {
  return (
    <section className="hero" id="home">

      {/* BACKGROUND IMAGE */}
      <div className="hero-bg" style={{ backgroundImage: `url(${logo})` }}></div>

      {/* DARK OVERLAY */}
      <div className="hero-overlay"></div>

      {/* CONTENT */}
      <div className="hero-content">

        {/* SMALL LABEL */}
        <span className="hero-label">
          WELCOME TO FITNESS SPORTS CENTER
        </span>

        {/* BIG TITLE */}
        <h1 className="hero-title">
          TRANSFORM<br />
          YOUR <span className="gold">BODY</span><br />
          TODAY
        </h1>

        {/* DESCRIPTION */}
        <p className="hero-desc">
          Unlock your potential with our elite trainers and
          state-of-the-art facilities. Premium fitness designed
          for high achievers.
        </p>

        {/* BUTTONS */}
        <div className="hero-btns">
          <button className="btn-primary">JOIN NOW →</button>
          <button className="btn-outline">VIEW MEMBERSHIP</button>
        </div>

      </div>

    </section>
  );
};

export default Hero;