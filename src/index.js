const http = require("http");

/**
 * Create server
 */
const server = http.createServer(async (req, res) => {
  //req => incoming request from client && res => in the response to the client nt from server
  if (req.method === "GET" && req.url === "/") {
    console.log("hello from the server");
    res.end();
  }
});

//Start the server
server.listen(3001, () => {
  console.log("server on http://localhost:3001 ");
});
