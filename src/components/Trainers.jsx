import { useEffect, useRef } from "react";
import "./Trainers.css";
import logo1 from "../assets/strength.jpg";
import logo2 from "../assets/Hiit.jpg";
import logo3 from "../assets/yoga.jpg";


const TRAINERS = [
  {
    name: "ALEX REED",
    role: "STRENGTH & CONDITIONING",
    img: logo1,
    imgPosition: "35% center",

  },
  {
    name: "S JENKINS",
    role: "HIIT & NUTRITION SPECIALIST",
    img: logo2,
    imgPosition: "95% center",
    imgHeight: "320px",
  },
  {
    name: "MERY",
    role: "YOGA & MOBILITY MASTER",
    img: logo3,
    imgPosition: "55% center",

  },
];

const Trainers = ({ darkMode }) => {
  const mode = darkMode ? "dark" : "light";

  // ===== SCROLL REVEAL =====
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
    <section className={`trainers ${mode}`} id="trainers">
      <div className="container">

        
        <div className="section-center reveal" ref={addRef}>
          <span className="section-label">OUR EXPERTS</span>
          <h2 className="section-title" style={{
            color: darkMode ? "#F2EFE6" : "#090909"
          }}>
            Elite Coaching Team
          </h2>
        </div>

        
        <div className="trainers-grid">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.name}
              className="trainer-card reveal"
              ref={addRef}
            >
              
              <div className="trainer-img-wrap">
                <img
                  src={trainer.img}
                  alt={trainer.name}
                  style={{
                    objectPosition: trainer.imgPosition || "center center",
                    height: trainer.imgHeight || "340px",
                  }}
                />
              </div>

              
              <h3 className="trainer-name">{trainer.name}</h3>

              
              <p className="trainer-role">{trainer.role}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trainers;