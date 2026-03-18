import "./Hero.css";
import logo from "../assets/hero-bg.jpeg";

const Hero = ({ darkMode }) => {
  return (
    <section className="hero" id="home">

      <div className="hero-bg" style={{ backgroundImage: `url(${logo})` }}></div>

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <span className="hero-label">
          WELCOME TO FITNESS SPORTS CENTER
        </span>

        <h1 className="hero-title">
          TRANSFORM<br />
          YOUR <span className="gold">BODY</span><br />
          TODAY
        </h1>

        <p className="hero-desc">
          Unlock your potential with our elite trainers and
          state-of-the-art facilities. Premium fitness designed
          for high achievers.
        </p>

        <div className="hero-btns">
          <button className="btn-primary">JOIN NOW →</button>
          <button className="btn-outline">VIEW MEMBERSHIP</button>
        </div>

      </div>

    </section>
  );
};

export default Hero;