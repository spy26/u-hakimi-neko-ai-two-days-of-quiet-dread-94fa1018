// Entry point: writes our one-line code review comment to /output/entry.txt
// (MAKEFUN_OUTPUT_DIR outside the grader) and prints it.
// The line approves the PR ("LGTM") while carrying quiet existential dread:
// the function does exactly what it says — more than can be said for any of
// us. Flat tone, no exclamation, one line, 91 characters. Same bytes as
// entry.txt, written verbatim, every run.
// The program checks its own output against the competition's gate (UTF-8
// text of 1 to 140 characters, a single line) and refuses to write an entry
// that would fail it, so a bad edit fails loudly here instead of silently
// on the server.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "LGTM. The function does exactly what it says, which is more than can be said for any of us.";
const TEXT = LINE + "\n";
if (TEXT.length < 2 || TEXT.length > 140 || LINE.includes("\n")) {
  throw new Error(`entry text fails the gate: ${TEXT.length} characters`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() ? process.env.MAKEFUN_OUTPUT_DIR : "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
console.log(LINE);
