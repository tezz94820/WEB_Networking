setImmediate(() => console.log("this is setimmediate-1"));
setImmediate(() => {
    console.log("this is setimmediate-2");
    process.nextTick(() => console.log("this is process.nexttick-1"));
    Promise.resolve().then( () => console.log("this is promise.resolve-1")); 
});
setImmediate(() => console.log("this is setimmediate-3"));


//result
// this is setimmediate-1
// this is setimmediate-2
// this is process.nexttick-1
// this is promise.resolve-1
// this is setimmediate-3