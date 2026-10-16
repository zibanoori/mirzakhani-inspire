import { useState } from "react";
import { FaMedal, FaInfinity } from "react-icons/fa6";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);
}

return (
  <div className={`min-h-screen ${isDark ? "dark" : ""}`}>
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center"></section>
  </div>
);
