// self here is reference to global object of service worker.

console.log("running service worker");

self.addEventListener('install', event => {
    console.log('installing service worker');
})

self.addEventListener('activate', event => {
    console.log('service worker is activated');
})


self.addEventListener('fetch', event => {
    console.log('intercepted http request',event.request);
})


self.addEventListener('message', event => {
    console.log('The message sent is ');
})

