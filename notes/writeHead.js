import http from "node:http";

const PORT = 8000;
const server = http.createServer((req, res) => {
  // Sets a response header but doesn't send it immediately
  // Allows you to set or modify headers individually, at any point before sending the response
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "text/html");

  // Other option to set statusCode and header
  // This one sends any headers immediatly
  // No further modification is possible
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<html><h1>The server is working</h1></html>");
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
