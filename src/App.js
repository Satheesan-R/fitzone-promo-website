import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Trainers from "./components/Trainers";
import Membership from "./components/Membership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TermsConditionsPage from "./components/TermsConditionsPage";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import RefundPolicyPage from "./components/RefundPolicyPage";

const getRouteFromLocation = () => {
  const pathRoute = window.location.pathname
    .replace(/^\/+|\/+$/g, "")
    .toLowerCase();

  if (pathRoute) return pathRoute;

  return window.location.hash.replace(/^#\/?/, "").toLowerCase();
};



function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [route, setRoute] = useState(getRouteFromLocation);

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(getRouteFromLocation());
    };

    window.addEventListener("hashchange", handleRouteChange);
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("hashchange", handleRouteChange);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const policyRouteMap = {
    "terms-conditions": <TermsConditionsPage darkMode={darkMode} />,
    "privacy-policy": <PrivacyPolicyPage darkMode={darkMode} />,
    "refund-policy": <RefundPolicyPage darkMode={darkMode} />,
  };
  const activePolicyPage = policyRouteMap[route];

  return (
    <div style={{
      background: darkMode ? "#090909" : "#f5f5f5",
      color: darkMode ? "#F2EFE6" : "#090909",
      minHeight: "100vh",
      transition: "background 0.3s, color 0.3s",
    }}>

      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

      {activePolicyPage ? (
        activePolicyPage
      ) : (
        <>
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Services darkMode={darkMode} />
          <Trainers darkMode={darkMode} />
          <Membership darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </>
      )}
      <Footer darkMode={darkMode} />

    </div>
  );
}


export default App;