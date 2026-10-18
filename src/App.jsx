import { useState } from "react";
import { FaMedal, FaInfinity } from "react-icons/fa6";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={`min-h-screen bg-paper transition-colors duration-300 ${isDark ? "dark" : ""}`}
    >
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        <div className="mb-8 text-gold transition-transform duration-300 cursor-pointer">
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
          className="mt-10 px-8 py-3 bg-accent text-on-accent rounded-full hover:bg-opacity-90 transition-all shadow-lg font-medium cursor-pointer"
        >
          {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </section>
    </div>
  );
}

export default App;
