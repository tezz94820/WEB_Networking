# **CORS (Cross-Origin Resource Sharing)**

CORS (Cross-Origin Resource Sharing) policy is a security feature implemented by web browsers to control how web pages or web applications running in one domain can request and interact with resources from another domain. In simpler terms, it's a mechanism that allows servers to specify who can access their resources (such as APIs, fonts, images, etc.) and from which origins (domains).

The **Same-Origin Policy (SOP)** is a fundamental security concept in web browsers, which restricts web pages from making requests to a different domain than the one that served the web page. This is a security measure to prevent unauthorized access to sensitive data and resources.

CORS was introduced to relax this restriction in a controlled manner. It enables servers to define specific rules that allow cross-origin requests from certain domains while still maintaining security. These rules are implemented by the web browser.

When a web page or application makes an HTTP request (e.g., using JavaScript's XMLHttpRequest or Fetch API) to a different domain, the browser sends a preflight request (an HTTP OPTIONS request) to the server to check if the cross-origin request is allowed. The server responds with appropriate CORS headers indicating whether the request is permitted or denied.

The main CORS headers are:

1. **Access-Control-Allow-Origin**: Specifies which domains are allowed to make cross-origin requests to the server. For example, setting it 
to "*" allows any domain to make requests, while setting it to a specific domain only allows requests from that domain.

2. **Access-Control-Allow-Methods**: Indicates which HTTP methods (e.g., GET, POST, PUT, DELETE) are allowed for cross-origin requests.

3. **Access-Control-Allow-Headers**: Specifies which HTTP headers are allowed for cross-origin requests.

4. **Access-Control-Expose-Headers**: Defines which response headers should be exposed and made accessible to the requesting client.

5. **Access-Control-Allow-Credentials**: Indicates whether the browser should include credentials (e.g., cookies, HTTP authentication) in 
cross-origin requests.

6. **Access-Control-Max-Age**: Specifies how long the results of a preflight request can be cached.

If the server's CORS policy does not include the necessary headers, or if the client's domain is not allowed by the server, the browser will block the request, and you may encounter CORS-related errors in your application.

Developers need to configure their server to handle CORS requests appropriately based on their security requirements. Properly setting up CORS allows web applications to securely interact with APIs and resources from different domains while preventing unauthorized access and potential security risks.


## My notes
1. So CORS policies states that you cannot request the API from any origin that you want. If you are on youtube.com and you go into its inspect and write fetch API for google.com then you will get CORS error stating that you are not allowed to access cross origin. To solve this problem CORS was introduced. Now we can access others website information if that websit server has allowed to do that. 

2. Now what will happen is, the youtube.com will make a preflight which is nothing but a request to get the options. We will make a request with the method option and send it to the server of google.com if google.com has implemented the option method aPI and allowed some of the headers, origin then and only then the youtube.com will get the permission to fetch the particular API. 

3. Why this was introduced is to add an extra layer of security. Let's see you are on a website named xyz.com and in the text yz.com is a ad on clicking that add it sends a request from our browser to sbi.com. I have account in it so SBI.com aPI request from the xyz.com domain. But as a user I never made that request from my browser. So if sbi.com has restricted its allow access resource origin header to only some specified urls then xyz.com will never be able to get the request response.