# HTTP 
1. Normal request response happens with the help of TCP connection. 

# HTTPS 
1. Before establishing a TCP connection we establish a TLS or SSL encryption. 
2. Their during the DLS or SSL encryption wheat try to share the symmetry ke algorithm. We encrypted with a key, and the similar key is used to decrypted at the other and as well. It might be a symmetric or asymmetric encryption and description. But http doesn't have it https have it. 

# HTTP 1.0 
1. This was the version of hddp which came back in 1996. At that time the server has very less RAM or memory which was about 64 megabytes which is very less. So we try to break down the TCP connection after a single request. 
2. First we made us request from this client and indirect request we made a http packet packed it in using a TCP protocol and sent it . As we know that TCP protocol requires a lot of time for it initialisation and all the things which TCP does internally.TCP is slow and do is http 1.0 
3. Every time we make a http request we make a new DCP connection with the server and then close it another time we need to make a hddp request we need to again established DCP connection with the server. 

# HTTP 1.1 
1. Http 1.1 solve the problem of being slow 
2. In http 1.1 we do not close the TCP connection after a single http request. 
3. There is a tag called keep alive. If you want to keep alive our TCP connection we sent a keep alive tag from the client to the server. The server now knows that he will keep the connection alive and neither server nor client closes the connection. At the last the client closes the connection and does not send the people like that and hence server even closes the connection. 

**Advantages**:- 
1. Persisted TCP connection. 
2. Low latency 
3. Streaming with chunk transfer. :- sending the videos,images in the form of Strings  
4. Pipelining :- sending all the http request at once and then waiting for the responses one by one.

This was good but there was a huge problem of ordering the packets after we received it. Because sending can be in order but receiving the http request response cannot be in order.

# HTTP 2 
1. **Multiplexing** :- now we can send multiple request to the http server by using a single TCP connection. In http 1.1 we can send only one single request at a single time. But with http 2 we can send multiple request at a single time. It makes us to access more things in less time. 
2. Binary protocol http 1.1 use the plane text format but http 2 uses binary format in its protocol making it more suitable for transferring it and parsing. 
3. **Header compression** :- in http 1.1 we were sending the same headers with some of the changes at every http request. Reduce it in this http 2. And introduced the compression of the headers which help us to attain the higher latency. 
4. **Server push** :- now the server explicitly can push some of the content to the client. Light say that client ask for a get request of website then http 1.1 the server be respond with only a get request, but here with http 2 the server knows that the client will require the CSS file as well as the JavaScript file also which are necessary for a single website so it explicitly pushhers that to the client hence it saves the time. 

# HTTP 3 
1. It uses udp protocol(QUICK)(Quick UDP Internet Connections) instead of using the TCP protocol which was earlier used by the http 1.1 and http 2. 
2. It's supports all the features of the http 2 but increase in its security using the quick protocol which is made by combining the udp as well as TLS(Transport layer security).