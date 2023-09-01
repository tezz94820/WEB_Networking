
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./index1.js', () => console.log("read file"));
    res.end("hello\b\n");
})

server.listen(3000);
console.log('server is listening on port 3000');


// here fs.readFile is a asynchronous function that means it is done by one of the worker thread and not the main thread.

