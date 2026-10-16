import { useState } from "react";
import { FaMedal, FaInfinity } from "react-icons/fa6";
import "./App.css";
import { DiVim } from "react-icons/di";

function App() {
  const [isDark, setIsDark] = useState(false);
}

return <div className={`min-h-screen ${isDark ? "dark" : ""}`}></div>;
