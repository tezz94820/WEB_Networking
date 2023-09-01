Promise.resolve().then(() => {
    console.log("Promise.resolve-1");
})

process.nextTick(() => {
    console.log("Process,nextTick-1" );
})


//result
// Process,nextTick-1
// Promise.resolve-1

//because aalways nexttick queue will be executed first and then promise queue callback functions.