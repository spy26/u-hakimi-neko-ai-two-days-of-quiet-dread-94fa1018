// Entry point: writes our one-line code review comment to /output/entry.txt
// (MAKEFUN_OUTPUT_DIR outside the grader) and prints it.
// The line approves the PR ("LGTM") while carrying quiet existential dread:
// the function does exactly what it says — more than can be said for any of
// us. Flat tone, no exclamation, one line, 91 characters. Same bytes as
// entry.txt, written verbatim, every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "LGTM. The function does exactly what it says, which is more than can be said for any of us.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(LINE);
