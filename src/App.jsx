import { useState } from "react";
import { FaMedal, FaInfinity } from "react-icons/fa6";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`min-h-screen ${isDark ? "dark" : ""}`}>
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        <div className="mb-6 text-emerald-600 dark:text-emerald-400">
          <FaInfinity size={64} />
        </div>
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
          Maryam Mirzakhani
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl font-sans">
          First woman and first Iranian to win the Fields Medal
        </p>
      </section>
    </div>
  );
}

export default App;
