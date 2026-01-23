import http from "node:http";
import { serveStatic } from "./utils/serveStatic.js";
import fs from "node:fs/promises";

const PORT = 8000;
const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
  const pathToResource = serveStatic(__dirname); // /Users/gianellacoronel/Documents/Learning/Node/nodejs_routes_paths/public/index.html

  // Using async/await to avoid using callback
  const content = await fs.readFile(pathToResource, "utf8");

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(content);
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
