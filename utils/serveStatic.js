import path from "node:path";

export const serveStatic = (baseDir) => {
  const filePath = path.join(baseDir, "public", "index.html");
  return filePath;
};
