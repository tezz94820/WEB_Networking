FROM  node:18
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm","start"]


# to create image :-  docker build -t nginx_node_server .
# to create 4 container :- docker run -p 2222:9999 -e APPID=2222 -d nginx_node_server
# docker run -p 3333:9999 -e APPID=3333 -d nginx_node_server
# docker run -p 4444:9999 -e APPID=4444 -d nginx_node_server
# docker run -p 5555:9999 -e APPID=5555 -d nginx_node_server
