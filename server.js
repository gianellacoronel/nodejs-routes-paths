import http from "node:http";

const PORT = 8000;
const __dirname = import.meta.dirname;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><h1>The server is working</h1></html>");
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
