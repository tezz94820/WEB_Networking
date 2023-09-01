setTimeout(() => console.log("this is settimeout-1") , 0);
setTimeout(() => console.log("this is settimeout-2") , 0);
setTimeout(() => console.log("this is settimeout-3") , 0);

process.nextTick(() => console.log("this is process.nexttick-1"))
process.nextTick(() => {
    console.log("this is process.nexttick-2");
    process.nextTick(() => console.log("inner nexttick of process.nexttick-2"));
})
process.nextTick(() => console.log("this is process.nexttick-3"));



Promise.resolve().then( () => console.log("this is promise.resolve-1"));
Promise.resolve().then(() => {
    console.log("this is promise.resolve-2")
    process.nextTick(() => console.log("inner nexttick of promise.resolve-2"));
});
Promise.resolve().then(() => console.log("this is promise.resolve-3"));


//result
// this is process.nexttick-1
// this is process.nexttick-2
// this is process.nexttick-3
// inner nexttick of process.nexttick-2
// this is promise.resolve-1
// this is promise.resolve-2
// this is promise.resolve-3
// inner nexttick of promise.resolve-2
// this is settimeout-1
// this is settimeout-2
// this is settimeout-3