# Node is single threaded / multi-threaded 

1. The main thread of the node is doing all the synchronous and all the Asynchronous task but node uses multiple threads by using the libUV library of C++ . Node uses this library to make the use of multiple thread to do two types of operations :-  
    - I/O intensive tasks. 
    - CPU intensive tasks. 
    - DNS fetching Tasks.

2. Whenever asynchronous input output task comes node knows that it would take time so asynchronous I/O is done by thread of libuv library.

3. Again the CPU intensive task like encryption or compression for example doing the operations of the Crypto library is done by the different thread of libuv library. 

4. the work of fetching the different apis and converting the domain to iP address is done by different thread of libuv library.

5. The main networking operations are always done by the main thread.

6. use this command to run the javascript file in terminal 
```
curl -v http://localhost:3000
```


