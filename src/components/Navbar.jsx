import ThemeToggle from "./ThemeToggle";

export default function Navbar({ theme, onToggle }) {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center border-b border-line bg-paper/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="font-serif font-bold text-xl text-ink">Maryam Mirzakhani</div>
      <ThemeToggle theme={theme} onToggle={onToggle} />
    </nav>
  );
}
