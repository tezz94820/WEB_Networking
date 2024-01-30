# web workers
1. there are 2 types of web workers like :- dedicated workers and shared workers.
2. Dedicated workers have one-to-one relationship with the mian thread. each worker performs actions with the main thread independently. "const worker = new Worker("worker.js);"
3. shared workers have may-to-many relationship. i.e the memory is shared with multiple main thread and multiple workers. so as they can have a collaborative communication.  

# Service Workers
# sw_1
1. Service workers are one of the type of the webworkers. 
2. The main difference between the web workers and the service workers is that, if you open multiple instances of the same website that is if he open same website on multiple tabs on the same Browser. For each new tab new web worker will be created but service worker will be shared for all the tabs. 
3. There will be only one service worker for all the tabs and when all the tabs are closed the service worker is closed.

# sw_2 :- caches

# cache
1. it is just like a storage where we can store the key pairs of Request and Response objects.
2. first we need to open a cache and name is uniquely. lets say we want to cache the fonts. so we will name it 'fonts'.method is cache.open().
3. After opening we can use 2 methods for putting the request response in the cache.
    1. cache.put() :- inside put you will give request and response object. that means you will fetch the response from the url and then give the response and request object to it.
    2. cache.add() :- fetch + put. you can give the URL in the add and it will fetch it for you.
4. you can search in the cache storage using match methods. 
    1. cache.match() :- expects a req url string and returns a response object
    2. caches.matchAll() :- it checks in the entire caches
5. cache.keys() :- returns a list of all req url strings
6. cache.delete() :- expects a cache objext name and it deleted it and returns boolean.
