import Reveal from "./Reveal";

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  tinted = false,
  children,
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`py-20 sm:py-28 ${tinted ? "border-y border-line bg-surface/60" : ""}`}
    ></section>
  );
}
