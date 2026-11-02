import { useState } from "react";
import { portrait } from "../data/content";
import PoincareDisk from "./PoincareDisk";

export default function Portrait() {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className="mx-auto w-full max-w-sm">
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-4 bg-accent-soft transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      ></div>
    </figure>
  );
}
