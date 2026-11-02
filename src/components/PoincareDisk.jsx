import { useMemo } from "react";
function geodesicPath(a, b) {
  const r = Math.tan((b - a) / 2);
  const point = (t) => `${Math.cos(t).toFixed(4)} ${Math.sin(t).toFixed(4)}`;
  return `M${point(a)}A${r.toFixed(4)} ${r.toFixed(4)} 0 0 0 ${point(b)}`;
}

function buildPaths(corners, steps) {
  const paths = [];
  steps.forEach((step, layer) => {
    for (let i = 0; i < corners; i += 1) {
      const a = (2 * Math.PI * i) / corners;
      const b = a + (2 * Math.PI * step) / corners;
      paths.push({ d: geodesicPath(a, b), layer });
    }
  });
  return paths;
}
