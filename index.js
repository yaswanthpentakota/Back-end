import http from "http"; // Importing http

// req -> request, res -> response
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from backend.");
});

// Starting server
server.listen(7017, () => {
    console.log('Server running at port 7017');
});

// Run
// node index.js
