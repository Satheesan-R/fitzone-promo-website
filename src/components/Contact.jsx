import { useState, useEffect, useRef } from "react";
import "./Contact.css";
import logo from "../assets/Gym Map.png";

const MAP_POINTS = [
  { name: "Fitness Sports Center", top: "42%", left: "54%", featured: true },
];

const Contact = ({ darkMode }) => {
  const mode = darkMode ? "dark" : "light";

  // ===== FORM STATE =====
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

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

  // ===== VALIDATION =====
  const validate = () => {
    const newErrors = {};

    // Name check
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email check
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Message check
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  // ===== HANDLE SUBMIT =====
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  // ===== HANDLE INPUT CHANGE =====
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // clear error when typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // ===== RESET FORM =====
  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section className={`contact ${mode}`} id="contact">
      <div className="container">

        {/* HEADING */}
        <div className="reveal" ref={addRef}>
          <span className="section-label">CONTACT US</span>
          <h2 className="section-title" style={{
            color: darkMode ? "#F2EFE6" : "#090909"
          }}>
            Start Your Journey
          </h2>
        </div>

        <div className="contact-grid">

          {/* LEFT — FORM */}
          <div className="reveal" ref={addRef}>

            {/* SUCCESS MESSAGE */}
            {submitted ? (
              <div className="success-msg">
                <div className="success-icon">✅</div>
                <h3>Message Sent!</h3>
                <p>We'll get back to you within 24 hours.</p>
                <button className="btn-submit" onClick={resetForm}>
                  SEND ANOTHER
                </button>
              </div>
            ) : (

              /* FORM */
              <form onSubmit={handleSubmit} noValidate>

                {/* NAME + EMAIL ROW */}
                <div className="form-row">

                  {/* NAME */}
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${mode} ${errors.name ? "error" : ""}`}
                    />
                    <span className="form-error">{errors.name}</span>
                  </div>

                  {/* EMAIL */}
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${mode} ${errors.email ? "error" : ""}`}
                    />
                    <span className="form-error">{errors.email}</span>
                  </div>

                </div>

                {/* MESSAGE */}
                <div className="form-group">
                  <label>Your Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your fitness goals..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-input ${mode} ${errors.message ? "error" : ""}`}
                  />
                  <span className="form-error">{errors.message}</span>
                </div>

                {/* SUBMIT */}
                <button type="submit" className="btn-submit">
                  SEND MESSAGE
                </button>

              </form>
            )}
          </div>

          {/* RIGHT — MAP + INFO */}
          <div className="reveal" ref={addRef}>

            {/* MAP */}
            <div className={`map-placeholder ${mode}`}>
              <img
                src={logo}
                alt="Fitness Sports Center location map"
                className="map-image"
              />
              <div className="map-points">
                {MAP_POINTS.map((point) => (
                  <div
                    key={point.name}
                    className={`map-point ${point.featured ? "featured" : ""}`}
                    style={{ top: point.top, left: point.left }}
                  >
                    <span className="map-dot" aria-hidden="true" />
                    <span className="map-label">{point.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CONTACT DETAILS */}
            <div className="contact-details">
              <div>
                <p className="detail-label">VISIT US</p>
                <p className="detail-text">
                  Gampaha Gymn, 18 College Avenue<br />
                  Gampaha Mount Lavinia 10250
                </p>
              </div>
              <div>
                <p className="detail-label">CONTACT INFO</p>
                <p className="detail-text">
                  0769400150<br />
               john@fitnesssportscenter.com
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;