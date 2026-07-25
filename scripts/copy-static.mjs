import { cp, mkdir } from "node:fs/promises";
import { sep } from "node:path";

const staticPaths = ["css", "resume", "guide", "legacy", "projects"];
const privateStaticFiles = new Set([
  ["resume", "application.html"].join(sep),
  ["resume", "images", "boreum.jpg"].join(sep),
]);

await mkdir("dist", { recursive: true });

for (const path of staticPaths) {
  await cp(path, `dist/${path}`, {
    recursive: true,
    force: true,
    filter: (source) => {
      const normalizedSource = source.split("/").join(sep);
      return !normalizedSource.includes(`${sep}wp${sep}`)
        && !normalizedSource.endsWith(`${sep}.DS_Store`)
        && !privateStaticFiles.has(normalizedSource);
    },
  });
}
