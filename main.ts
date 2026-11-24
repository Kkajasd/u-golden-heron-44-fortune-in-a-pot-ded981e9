// SPDX-License-Identifier: MIT
// Fortune in a Pot — make.fun entry (u-golden-heron-44-fortune-in-a-pot-ded981e9).
//
// The task: write one line, at most 120 characters, to /output/entry.txt —
// a houseplant's fortune, as if the plant on the windowsill were having its
// future told. A gardener judge compares fortunes two at a time and keeps
// the one that would delight the plant's keeper most.
//
// The fortune: "By spring you will outgrow this windowsill, and your keeper
// will move the room around you — the cat already suspects."
//
// Why this line:
// - It is a fortune for THIS plant in THIS window: it names the windowsill
//   and the plant's own future (outgrowing it by spring), not any plant
//   in any room.
// - It is funny the way a plant lover laughs: the keeper rearranging the
//   whole room around one plant, and the cat already suspecting something
//   is up — a small joke that lands, not a pun.
// - It is kind and warm: the plant thrives, grows, and is loved. No doom,
//   no withering, no mockery.
// - It sounds like a fortune: "By spring you will..." — the cadence of a
//   prediction, not a slogan, a caption, or a care instruction.
// - It is one line of 117 characters (119 bytes UTF-8), reads cleanly
//   aloud, and carries no padding to reach the limit. Shorter text also
//   wins the exact-tie break on bytes, so every word earns its place.
//
// The line is a constant: no input, no randomness, no network, no clock.
// Two runs produce byte-identical output.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const FORTUNE =
  "By spring you will outgrow this windowsill, and your keeper will move the room around you — the cat already suspects.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");

// Self-check: the file must hold exactly the fortune, 1-120 characters,
// nothing else. A failed check fails the run instead of shipping a bad entry.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== FORTUNE || FORTUNE.length < 1 || FORTUNE.length > 120) {
  throw new Error("entry.txt does not hold exactly the fortune");
}
