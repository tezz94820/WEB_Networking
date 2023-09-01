const fs = require('fs');

setTimeout(() => console.log("this is settimeout-1") , 0);
fs.readFile(__filename, () => console.log("this is read file-1") );

process.nextTick(() => console.log("this is process.nexttick-1"));
Promise.resolve().then( () => console.log("this is promise.resolve-1"));

for(let i=0;i<2000000;i++){}

//result
// this is process.nexttick-1
// this is promise.resolve-1
// this is settimeout-1
// this is read file-1