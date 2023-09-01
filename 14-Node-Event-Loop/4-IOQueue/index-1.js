const fs = require('fs');

fs.readFile(__filename, () => console.log("this is read file-1") );
process.nextTick(() => console.log("this is process.nexttick-1"));
Promise.resolve().then( () => console.log("this is promise.resolve-1"));

//result
// this is process.nexttick-1
// this is promise.resolve-1
// this is read file-1