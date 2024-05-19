## Image-1
    1. Javascript is a single threaded language that means first all the synchronous functions will be run and then async functions
    will be run by a single thread.

## Image-2

    2. Libuv is a place where all the asynchrous code go and run .

    3. Now the problem is what order will it follow to run alll the async code and this is acheived by event loop.
    4. First all the synchronous functions will be run and then async functions are sent to libuv.

## image-3

    5. this are the questions to be answered.

## image-4
    event loop cycle starts from timer queue.

## image-5 
    working of event loop

## image-7 
    questions answered.

So finally first synchrounous code will run in the csll stack then all the async functions will be collected and shifted to 
libuv and then in the libuv async functions ill go through event loop and finally returneeed to call stack when the call stack os empty.

code executed.