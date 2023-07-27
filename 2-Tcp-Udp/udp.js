const dgram = require('dgram');
const socket = dgram.createSocket('udp4');

socket.on('message',(msg,rinfo) => {
    console.log(`server got ${msg} from ${rinfo.address} : ${rinfo.port}`);
})

socket.bind(8081);

//use this command to interact with the udp server
//echo Hello, UDP server! | nc.exe -u 127.0.0.1 8081
