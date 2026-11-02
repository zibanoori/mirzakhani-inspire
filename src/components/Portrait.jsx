import { useState } from "react";
import { portrait } from "../data/content";
import PoincareDisk from "./PoincareDisk";

export default function Portrait() {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const hasCredit = Boolean(portrait.credit);

  return (
    <figure className="relative mx-auto w-full max-w-sm">
      {/* Large animated logo behind the frame */}
      <PoincareDisk
        spin
        className="absolute -inset-20 z-0 w-[250%] text-accent/40"
      />

      {/* Portrait frame */}
      <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_24px_60px_-30px_rgba(0,0,0,0.45)]">
        {/* Logo inside the frame */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-4 bg-accent-soft p-8 text-center text-accent transition-opacity duration-500 ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        >
          <PoincareDisk className="w-3/5" />

          <p className="text-sm font-medium text-muted">Portrait placeholder</p>
        </div>

        {!failed && (
          <img
            src={portrait.src}
            alt={portrait.alt}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>

      {/* Image credit */}
      <figcaption className="relative z-10 mt-4 text-center text-xs leading-relaxed text-muted">
        {loaded ? (
          hasCredit ? (
            <>
              {portrait.creditUrl ? (
                <a
                  href={portrait.creditUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-4"
                >
                  {portrait.credit}
                </a>
              ) : (
                portrait.credit
              )}

              {portrait.license && (
                <>
                  {" · "}
                  {portrait.licenseUrl ? (
                    <a
                      href={portrait.licenseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline underline-offset-4"
                    >
                      {portrait.license}
                    </a>
                  ) : (
                    portrait.license
                  )}
                </>
              )}
            </>
          ) : (
            "Attribution missing: fill in `portrait` in src/data/content.js."
          )
        ) : (
          "A licensed portrait will appear here once the image file is added."
        )}
      </figcaption>
    </figure>
  );
}
