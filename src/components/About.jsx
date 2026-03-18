import { useEffect, useRef } from "react";
import "./About.css";
import logo from "../assets/Gym Interior.png";


const About = ({ darkMode }) => {
  const mode = darkMode ? "dark" : "light";


  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <section className={`about ${mode}`} id="about">
      <div className="container">
        <div className="about-grid">

  
          <div className="about-img-wrap reveal" ref={addRef}>
            <img
              src={logo}
              alt="Gym Interior"
              className="about-img"
            />

            <div className="about-badge">
              <div className="badge-num">15+</div>
              <div className="badge-text">YEARS OF EXCELLENCE</div>
            </div>
          </div>

          {/* RIGHT — TEXT */}
          <div className="about-text reveal" ref={addRef}>

            <span className="section-label">OUR PHILOSOPHY</span>

            <h2 className="section-title">
              Redefining Fitness<br />Excellence
            </h2>

            <p className="about-desc">
              At Fitness Sports Center, we believe in a holistic approach
              to physical and mental transformation. Our mission is to provide
              a premium environment with expert guidance and world-class
              equipment that empowers our members to surpass their limits.
            </p>

           
            <div className="about-features">
              {[
                { icon: "⚙️", title: "Pro Equipment", desc: "Premier Strength & Life Fitness tech" },
                { icon: "👥", title: "Expert Trainers", desc: "Certified industry leaders" },
                { icon: "📊", title: "Track Progress", desc: "Data-driven fitness tracking" },
                { icon: "🥗", title: "Nutrition Plans", desc: "Personalized diet programs" },
              ].map((item) => (
                <div key={item.title} className="feature-item">
                  <span className="feature-icon">{item.icon}</span>
                  <div>
                    <div className="feature-title">{item.title}</div>
                    <div className="feature-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;