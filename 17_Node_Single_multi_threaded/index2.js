const http = require('http');
const server = http.createServer((req, res) => {
    console.log("request delivred");
    while(1);
    res.end("hello\b\n");
})

server.listen(3000);
console.log('server is listening on port 3000');

//here when we make first rquest it forms the tcp connection server takes takes that request and starts processing and we can see that the main thread is now computing the never ending while(1)
//loop. and the app is now stuck . 

// if the second request is made then the request waits in the queue until the main thread is free.
//no thread will ocme here and help.
