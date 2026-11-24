// One sentence for a traveler from 1800: the internet as a single great
// post office, built only from things they already know (post office,
// letters, books, pictures, lightning), with one memorable turn — the
// message arrives before you finish asking for it.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The whole world has become one great post office, where letters, books, and pictures travel by lightning and arrive before you finish asking for them.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
