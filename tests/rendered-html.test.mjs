import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("exports the complete academic homepage", async () => {
  const html = await readFile(new URL("../dist/client/index.html", import.meta.url), "utf8");

  assert.match(html, /<title>Songhe Wang/);
  assert.match(html, /builds vision systems that understand the physical world/);
  assert.match(html, /Selected publications/);
  assert.match(html, /When 3D Gaussian Splatting Recovers Real Surfaces/);
  assert.match(html, /Research Scientist/);
  assert.match(html, /University of North Carolina at Chapel Hill/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|SkeletonPreview/);
});

test("ships required GitHub Pages assets", async () => {
  await Promise.all([
    access(new URL("../dist/client/.nojekyll", import.meta.url)),
    access(new URL("../dist/client/og.png", import.meta.url)),
    access(new URL("../dist/client/Songhe_Wang_CV.pdf", import.meta.url)),
    access(new URL("../.github/workflows/pages.yml", import.meta.url)),
    access(new URL("public/og.png", root)),
  ]);
});
