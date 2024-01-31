# cache API
1. it can be found in the 22_service_workers in sw_2

#  Cache Stampede
1. Consider a case when we are using some Caching Mechanism in our application. So expected flow is first time request will come to application server , fetch the data from source(external source or database) , cache it and return response. From next time when same request come , it will be served from cache(if TTL not expired).
2. Now consider a website like Cricinfo(which actually using cache stampede). Around 1 lakh identical requests(finding score for same match at particular instant) came (parallel or at particular instant. Till this time no cached data is present so there will be cache misses. All these request served by application server by making db calls.
3. Above scenario that is very common in real time applications mainly, and we are wasting unnecessary resources/time for serving the same identical calls This scenario/case is called Cache Stampede Effect.
4. To avoid this we need a separate service that handles this stampede effect by combining or by using some locking mechanism identical request for the given timeframe.
5. https://medium.com/@rishabh171192/system-design-api-gateway-backend-for-frontend-bff-cache-stampede-circuit-breaker-9c77101e8d54


# cache Headers 
1. cache-control: public :- it says that all the load balancers,CDN,reverse proxies in between the server and the browser are allowed to cache the data.
2. cache-control: private :- it says  that only browser is allowed to cache and not any in between emetiy.
3. cache-control: public,max-age=1800 :- max age says to cache the data upto the specified seconds then we need to fetch the data from the server once again.
4. cache-control: no-cache :- it says to cache the data when initially the data is fetched. but on every subsequent request we need to revalidate the data with the server data. so here initally the data is cacehd in browser and then next time the browser will look in the cache but it will revalidate with the server data by fetching it. it is done to avoid stale data. this header can be applied to the data which is changing.
5. cache-control: no-store :- it says to do not cache the data . always fetch from server.
6. cache-control:public,s-maxage=<seconds> :- s-maxage is the time limit upto which the middlepersons like CDN, loadbalancers and reverse proxies will cache the data and after that time it will need to fetch the new data from the server.  