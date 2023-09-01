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

// this happens because this is a queue all the new callbcak will be behind .
//first complete nexttick then got to promise queue and then again go to nexttick queue if it not empty.
