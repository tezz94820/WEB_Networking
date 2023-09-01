const http = require('http');
const server = http.createServer((req, res) => {
    res.end("hello\b\n");
})

server.listen(3000);
console.log('server is listening on port 3000');

//this is the main networking so this task is done by the main thread