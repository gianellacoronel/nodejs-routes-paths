import http from "node:http";
import fs from "node:fs";

const PORT = 8000;
const __dirname = import.meta.dirname;

const server = http.createServer((req, res) => {
  const pathToResource = serveStatic(__dirname); // /Users/gianellacoronel/Documents/Learning/Node/nodejs_routes_paths/public/index.html

  const content = fs.readFileSync(pathToResource, "utf8");

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(content);
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
