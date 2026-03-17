import { useState, useEffect, useRef } from "react";
import "./Services.css";
import logo1 from "../assets/Strength Training.png";
import logo2 from "../assets/Cardio Training.png";
import logo3 from "../assets/Yoga.png";
import logo4 from "../assets/Personal Training.png";


const SERVICES = [
  {
    tag: "STRENGTH",
    tagColor: "#C9950C",
    title: "Pure Strength",
    desc: "Free weights, power racks, and specialized resistance equipment.",
    img: logo1,
    category: "strength",
  },
  {
    tag: "CARDIO",
    tagColor: "#2563eb",
    title: "HIIT & Cardio",
    desc: "High-performance treadmills, rowers, and all cardio needs.",
    img: logo2,
    category: "cardio",
  },
  {
    tag: "YOGA",
    tagColor: "#16a34a",
    title: "Mind & Body",
    desc: "Expert-led sessions of stability, balance, and nutrition plans.",
    img: logo3,
    category: "yoga",
  },
  {
    tag: "PT",
    tagColor: "#9333ea",
    title: "Elite Coaching",
    desc: "One-on-one personal training programs and nutrition plans.",
    img: logo4,
    category: "personal training",
  },
];

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Strength", value: "strength" },
  { label: "Cardio", value: "cardio" },
  { label: "Yoga", value: "yoga" },
  { label: "Personal Training", value: "personal training" },
];

const normalizeValue = (value) => value.trim().toLowerCase();

const Services = ({ darkMode }) => {
  const mode = darkMode ? "dark" : "light";

  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // ===== SCROLL REVEAL =====
  const revealRefs = useRef([]);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
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
      if (el) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  const addRef = (el) => {
    if (!el || revealRefs.current.includes(el)) {
      return;
    }

    revealRefs.current.push(el);

    if (observerRef.current) {
      observerRef.current.observe(el);
    } else {
      el.classList.add("visible");
    }
  };

  const handleFilterChange = (filterValue) => {
    setActiveFilter(normalizeValue(filterValue));
    setSearchQuery("");
  };

  // ===== FILTER LOGIC =====
  const filteredServices = SERVICES.filter((service) => {
    const normalizedCategory = normalizeValue(service.category);
    const matchFilter =
      activeFilter === "all" || normalizedCategory === activeFilter;

    const matchSearch =
      searchQuery === "" ||
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.desc.toLowerCase().includes(searchQuery.toLowerCase());

    return matchFilter && matchSearch;
  });

  return (
    <section className={`services ${mode}`} id="services">
      <div className="container">

        {/* HEADER */}
        <div className="services-header reveal" ref={addRef}>
          <div>
            <span className="section-label">OUR SERVICES</span>
            <h2 className="section-title" style={{
              color: darkMode ? "#F2EFE6" : "#090909"
            }}>
              World-Class Training
            </h2>
          </div>

          {/* SEARCH */}
          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search activities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`search-input ${mode}`}
            />
          </div>
        </div>

        {/* FILTER TABS */}
        <div className="filter-tabs reveal" ref={addRef}>
          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={`filter-tab ${mode} ${activeFilter === filter.value ? "active" : ""}`}
              onClick={() => handleFilterChange(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* SERVICES GRID */}
        {filteredServices.length === 0 ? (
          <div className="no-results">
            No services found for "{searchQuery}" 😕
          </div>
        ) : (
          <div className="services-grid">
            {filteredServices.map((service) => (
              <div
                key={service.title}
                className={`service-card ${mode} reveal`}
                ref={addRef}
              >
                {/* IMAGE */}
                <div className="card-img-wrap">
                  <img src={service.img} alt={service.title} />
                  <span
                    className="card-tag"
                    style={{ background: service.tagColor }}
                  >
                    {service.tag}
                  </span>
                </div>

                {/* BODY */}
                <div className="card-body">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <button className="explore-btn">Explore →</button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Services;