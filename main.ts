// One-Line Office Jokes — make.fun entry
// Writes a single original one-line joke about office life to /output/entry.txt.
// Deterministic: no network, no clock, no randomness. Node 22+ stdlib only.
// The joke is 101 characters on one line (gate: 1-199), punchline on the last beat.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The coffee machine broke on Monday; by Tuesday, HR had three resignation letters and one ransom note.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
