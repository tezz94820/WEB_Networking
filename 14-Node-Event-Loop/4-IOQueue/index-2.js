const fs = require('fs');

setTimeout(() => console.log("this is settimeout-1") , 0);
fs.readFile(__filename, () => console.log("this is read file-1") );

//result
// this is read file-1
// this is settimeout-1

//or
//this is settimeout-1
//this is read file-1

// . 
// the result is not same everytime. this is because the callback is scheduled according to the cpu utilizaion . 