console.log("console.log-1");
process.nextTick(() => {
    console.log("nexttick queue function. " );
})
console.log("console.log-2");
// result
// console.log-1
// console.log-2
// nexttick queue function. 
////// here first console goes to call stack and gets executed.
//then nexttick gets scheduled in nextTick microtask queue as a callback and 
//console3 gets in the call stack and gets executed.
//after that completion of all code . callback from queue enters the call stack and gets executed.
