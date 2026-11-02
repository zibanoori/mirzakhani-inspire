import { useState } from "react";
import { portrait } from "../data/content";
import PoincareDisk from "./PoincareDisk";

export default function Portrait() {
  const [loaded, setLoaded] = useState(false);

  return <figure className="mx-auto w-full max-w-sm"></figure>;
}
