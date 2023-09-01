const fs = require('fs');

setTimeout(() => console.log("this is settimeout-1") , 0);
fs.readFile(__filename, () => console.log("this is read file-1") );

process.nextTick(() => console.log("this is process.nexttick-1"));
Promise.resolve().then( () => console.log("this is promise.resolve-1"));
setImmediate(() => console.log("this is setimmediate-1")); // check queue

for(let i=0;i<2000000;i++){}


//result
// this is process.nexttick-1
// this is promise.resolve-1
// this is settimeout-1
// this is setimmediate-1
// this is read file-1

// the read file should run before setimmediate but opposite has happened.
// this is because of I/O polling . The callback will enter the io queue only when the file reading is completed . so when pointer came to io
//queue CB(callback) was not there.hence check queue callback is executed.
//and then at the next iteration io queued callback will be exxecuted.