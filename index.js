const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Hello World! This is my simple Node.js app.");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
