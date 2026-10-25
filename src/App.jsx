import { useState, useEffect } from "react";
import {
  FaMedal,
  FaInfinity,
  FaGraduationCap,
  FaAward,
  FaLocationDot,
  FaBuildingColumns,
} from "react-icons/fa6";
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
    <div className="min-h-screen bg-paper transition-colors duration-300 flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center py-20">
        <div className="mb-6 text-gold transition-transform duration-300 cursor-pointer hover:scale-110">
          <FaInfinity size={72} />
        </div>
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 text-ink">
          Maryam Mirzakhani
        </h1>
        <div className="flex items-center justify-center gap-2 text-muted mb-8">
          <FaMedal className="text-gold" />
          <p className="text-xl md:text-2xl font-sans leading-relaxed">
            First woman and first Iranian to win the Fields Medal
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 mb-16">
          <div className="p-4 border border-line rounded-lg bg-surface">
            <FaGraduationCap className="text-accent mx-auto mb-2" size={24} />
            <h3 className="font-bold text-ink">Education</h3>
            <p className="text-sm text-muted">PhD from Harvard</p>
          </div>
          <div className="p-4 border border-line rounded-lg bg-surface">
            <FaAward className="text-accent mx-auto mb-2" size={24} />
            <h3 className="font-bold text-ink">Fields Medal</h3>
            <p className="text-sm text-muted">Won in 2014</p>
          </div>
          <div className="p-4 border border-line rounded-lg bg-surface col-span-2 md:col-span-1">
            <FaInfinity className="text-accent mx-auto mb-2" size={24} />
            <h3 className="font-bold text-ink">Legacy</h3>
            <p className="text-sm text-muted">Inspiring future generations</p>
          </div>
        </div>
        <section className="max-w-3xl mx-auto mb-20">
          <div className="w-16 h-1 bg-gold mx-auto mb-8 rounded-full"></div>
          <blockquote className="font-serif text-2xl md:text-3xl text-ink italic leading-relaxed mb-6">
            "The beauty of mathematics only shows itself to more patient
            followers."
          </blockquote>
          <div className="text-muted font-sans text-lg tracking-wide">
            Maryam Mirzakhani
          </div>
        </section>
        <section className="py-16 px-4 w-full max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-ink mb-16">
            Life Journey
          </h2>
          <div className="relative border-1-2 border-gold/30 ml-6 md:ml-10 space-y-12">
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-gold border-4 boredr-paper shadow-md">
                <div className="p-5 border border-line rounded-xl bg-surface shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <FaLocationDot className="text-accent" />
                    <h3 className="font-bold text-lg text-ink">Tehran, Iran</h3>
                    <span className="text-xs font-mono text-gold bg-accent-soft px-2 py-1 rounded-full">
                      1977
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 text-center border-t border-line">
        <button
          onClick={() => setIsDark(!isDark)}
          className="px-6 py-2 bg-accent text-on-accent rounded-lg hover:bg-opacity-90 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-md font-medium cursor-pointer text-sm"
        >
          {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </footer>
    </div>
  );
}

export default App;
