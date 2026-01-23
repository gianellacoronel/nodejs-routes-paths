import http from "node:http";
import path from "node:path";
import { serveStatic } from "./utils/serveStatic.js";

const PORT = 8000;
const __dirname = import.meta.dirname;

const server = http.createServer((req, res) => {
  console.log(serveStatic(__dirname)); // /Users/gianellacoronel/Documents/Learning/Node/nodejs_routes_paths/public/index.html

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><h1>The server is working</h1></html>");
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
