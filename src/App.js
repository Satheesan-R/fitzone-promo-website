import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Trainers from "./components/Trainers";


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

      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Trainers darkMode={darkMode} />
    </div>
  );
}


export default App;