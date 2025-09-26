import { useState, useEffect } from "react";
import "./App.css";
import Onepage from "./Components/Onepage";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <Onepage />
      <AboutMe />
      <Experience />
    </div>
  );
}

export default App;
