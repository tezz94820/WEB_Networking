setTimeout(() => console.log("this is settimeout-1") , 1000);
setTimeout(() => console.log("this is settimeout-2") , 500);
setTimeout(() => console.log("this is settimeout-3") , 0);

//result
// this is settimeout-3
// this is settimeout-2
// this is settimeout-1

// callback will enter the timer queue according to the delay.

//so actually timer queue is a min heap . so whateber you will put here . the callback with the minimum delay will be first to execute.
