const fs = require('fs');

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on('close', () => {
    console.log("this is from readable stream close event callback");
});

setImmediate(() => console.log("this is setimmediate-1")); // check queue
setTimeout(() => console.log("this is settimeout-1"), 0); //timer queue
Promise.resolve().then( () => console.log("this is promise.resolve-1"));
process.nextTick(() => console.log("this is process.nexttick-1"));

//result
// this is process.nexttick-1
// this is promise.resolve-1
// this is settimeout-1
// this is setimmediate-1
// this is from readable stream close event callback