
const http = require('http');
const fs = require('fs');
const fetch = require('node-fetch');

const URL = "https://www.google.com/";

const server = http.createServer((req, res) => {
    fetch(URL).then(res => res.text()).then(console.log);
    res.end("hello\b\n");
})

server.listen(3000);
console.log('server is listening on port 3000');

process.env.UV_THREADPOOL_SIZE = 6 // default 4.
// this is the default 4 number of threads used by node server of the libuv library . you can increase it if you are doing  encryption or very CPU or I/O intensive tasks.  


// this is a asunchronous task of fetching  and this is done by the worker thread. and not the main thread.
 



