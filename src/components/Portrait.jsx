import { useState } from "react";
import { portrait } from "../data/content";
import PoincareDisk from "./PoincareDisk";

export default function Portrait() {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className="mx-auto w-full max-w-sm">
      <div className="relative aspect-[4/5] overflow-hidden rounded-t-[10rem] rounded-b-2xl border border-line bg-surface shadow-2xl">
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-4 bg-accent-soft transition-opacity duration-700 ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        ></div>

        <img
          src={portrait.src}
          alt={portrait.alt}
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </figure>
  );
}
