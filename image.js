import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    if (req.url === "/users") {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify({ name: "thub" }));
    }

    else if (req.url === "/about") {
        fs.readFile("image.jpeg", (err, imgData) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                return res.end("Error: Unable to load image");
            }

            res.writeHead(200, { "Content-Type": "image/jpeg" });
            res.end(imgData); 
        });
    }

    else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello this is from backend");
    }
});

server.listen(3005, () => {
    console.log(`The server port running on ${3005}`);
});