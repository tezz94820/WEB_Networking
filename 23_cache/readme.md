# cache API
1. it can be found in the 22_service_workers in sw_2

#  Cache Stampede
1. Consider a case when we are using some Caching Mechanism in our application. So expected flow is first time request will come to application server , fetch the data from source(external source or database) , cache it and return response. From next time when same request come , it will be served from cache(if TTL not expired).
2. Now consider a website like Cricinfo(which actually using cache stampede). Around 1 lakh identical requests(finding score for same match at particular instant) came (parallel or at particular instant. Till this time no cached data is present so there will be cache misses. All these request served by application server by making db calls.
3. Above scenario that is very common in real time applications mainly, and we are wasting unnecessary resources/time for serving the same identical calls This scenario/case is called Cache Stampede Effect.
4. To avoid this we need a separate service that handles this stampede effect by combining or by using some locking mechanism identical request for the given timeframe.