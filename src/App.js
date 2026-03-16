import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div style={{
      background: darkMode ? "#090909" : "#f5f5f5",
      color: darkMode ? "#F2EFE6" : "#090909",
      minHeight: "100vh",
      transition: "background 0.3s, color 0.3s",
    }}>

      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

      {/* test */}
      <div style={{ paddingTop: "100px", textAlign: "center" }}>
        <h1 style={{ color: "#C9950C", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "48px" }}>
          Fitness Sports Center 💪
        </h1>
      </div>

    </div>
  );
}

export default App;