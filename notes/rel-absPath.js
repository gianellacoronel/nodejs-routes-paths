import http from "node:http";
import path from "node:path";

const PORT = 8000;
const __dirname = import.meta.dirname;

// console.log("CWD (Current Working Directory)", process.cwd()); -> Also, it gives the path

const server = http.createServer((req, res) => {
  // path.join put words together to fit in the correct OS system (/ \)
  const absPathToResource = path.join(__dirname, "public", "index.html");
  const relPathToResource = path.join("public", "index.html");

  console.log("absolute: ", absPathToResource); // -> /home/projects/s08q30sch4/public/index.html
  console.log("relative: ", relPathToResource); // -> public/index.html

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><h1>The server is working</h1></html>");
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
