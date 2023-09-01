
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFileSync('./index1.js', () => console.log("read file"));
    res.end("hello\b\n");
})

server.listen(3000);
console.log('server is listening on port 3000');


// now this is a synchronous I/O operation . which means no new thread is created it is perfomred by the main thread.
// this becomes a Blocking operation



