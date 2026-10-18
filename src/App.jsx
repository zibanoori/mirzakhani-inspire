import { useState, useEffect } from "react";
import { FaMedal, FaInfinity } from "react-icons/fa6";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("mirzakhani-theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("mirzakhani-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("mirzakhani-theme", "light");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-paper transition-colors duration-300">
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        <div className="mb-8 text-gold transition-transform duration-300 cursor-pointer hover:scale-110">
          <FaInfinity size={72} />
        </div>
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-ink">
          Maryam Mirzakhani
        </h1>
        <p className="text-xl md:text-2xl text-muted max-w-2xl font-sans leading-relaxed">
          First woman and first Iranian to win the Fields Medal
        </p>
        <button
          onClick={() => setIsDark(!isDark)}
          className="mt-10 px-8 py-3 bg-accent text-on-accent rounded-lg hover:bg-opacity-90 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg font-medium cursor-pointer"
        >
          {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </section>
    </div>
  );
}

export default App;
