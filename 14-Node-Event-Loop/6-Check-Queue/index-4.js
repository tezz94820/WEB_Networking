setTimeout(() => console.log("this is settimeout-1"), 0);
setImmediate(() => console.log("this is setimmediate-1")); // check queue

//result 
// this is setimmediate-1
// this is settimeout-1