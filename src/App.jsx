import { useTheme } from "./useTheme";
import { person, hero, stats, timeline, references } from "./data/content";
import { FaInfinity } from "react-icons/fa6";
import Reveal from "./components/Reveal";
import Section from "./components/Section";
import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-paper transition-colors duration-300 flex flex-col">
      <Navbar theme={theme} onToggle={toggleTheme} />
      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center py-20">
        {/* Hero Section */}
        <div className="mb-6 text-gold transition-transform duration-300 cursor-pointer hover:scale-110">
          <FaInfinity size={72} />
        </div>

        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 text-ink">
          {person.name}
        </h1>
        <div className="flex items-center justify-center gap-2 text-muted mb-8">
          <p className="text-xl md:text-2xl font-sans leading-relaxed">
            {hero.lead}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 border border-line rounded-lg bg-surface"
            >
              <stat.icon className="text-accent mx-auto mb-2" size={24} />
              <h3 className="font-bold text-ink">{stat.title}</h3>
              <p className="text-sm text-muted">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <Section
          id="timeline"
          eyebrow="Biography"
          title="Life Journey"
          intro="Key milestones in the life of Maryam Mirzakhani."
          tinted={true}
        >
          <div className="relative border-l-2 border-gold ml-6 md:ml-10 space-y-12">
            {timeline.map((item, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-gold border-4 border-paper shadow-md"></div>
                  <div className="p-5 border border-line rounded-xl bg-surface shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <item.icon className="text-accent" />
                      <h3 className="font-bold text-lg text-ink">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-gold bg-accent-soft px-2 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </main>
      {/* References Section */}
      <section className="py-16 px-4 w-full max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-2xl text-ink mb-8">
          References & Further Reading
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {references.map((ref, index) => (
            <a
              key={index}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline transition-colors"
            >
              {ref.title} ↗
            </a>
          ))}
        </div>
      </section>
      <footer className="py-8 text-center border-t border-line">
        <p className="text-xs text-muted">
          © 2026 Mirzakhani Inspire · A tribute to Maryam Mirzakhani
        </p>
      </footer>
    </div>
  );
}

export default App;
