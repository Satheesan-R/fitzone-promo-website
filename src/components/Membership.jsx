import { useEffect, useRef } from "react";
import "./Membership.css";

const PLANS = [
  {
    name: "BASIC",
    price: "Rs. 3,500",
    features: [
      "Gym Access (6am – 9pm)",
      "Locker Room & Showers",
      "Free Wifi",
    ],
    highlight: false,
    btnLabel: "JOIN BASIC",
  },
  {
    name: "PRO",
    price: "Rs. 5,500",
    features: [
      "24/7 Gym Access",
      "All Group Classes",
      "Steam Room Access",
      "2 Guest Passes/Month",
    ],
    highlight: true,
    badge: "MOST POPULAR",
    btnLabel: "JOIN PRO",
  },
  {
    name: "ELITE",
    price: "Rs. 9,500",
    features: [
      "Unlimited Access",
      "Personal Training Sessions",
      "Nutrition Counseling",
      "VIP Lounge Access",
    ],
    highlight: false,
    btnLabel: "JOIN ELITE",
  },
];

const Membership = ({ darkMode }) => {
  const mode = darkMode ? "dark" : "light";

  // ===== SCROLL REVEAL =====
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
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
    <section className={`membership ${mode}`} id="membership">
      <div className="container">

        {/* HEADING */}
        <div className="section-center reveal" ref={addRef}>
          <span className="section-label">MEMBERSHIP</span>
          <h2 className="section-title" style={{
            color: darkMode ? "#F2EFE6" : "#090909"
          }}>
            Choose Your Level
          </h2>
        </div>

        {/* PLANS GRID */}
        <div className="plans-grid">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`plan-card ${mode} ${plan.highlight ? "highlight" : ""} reveal`}
              ref={addRef}
            >
              {/* BADGE */}
              {plan.badge && (
                <div className="plan-badge">{plan.badge}</div>
              )}

              {/* NAME */}
              <div className="plan-name">{plan.name}</div>

              {/* PRICE */}
              <div className="plan-price">
                <span className="price-num">{plan.price}</span>
                <span className="price-mo">/month</span>
              </div>

              {/* FEATURES */}
              <ul className="plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <button
                className={`plan-btn ${
                  plan.highlight
                    ? "gold"
                    : darkMode
                    ? "outline-dark"
                    : "outline-light"
                }`}
              >
                {plan.btnLabel}
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Membership;