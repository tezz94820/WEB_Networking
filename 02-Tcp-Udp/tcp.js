const net = require('net')

const server = net.createServer( socket => {
    socket.write('Hello')
    socket.on('data', data => {
        console.log(data.toString())
    })
})

server.listen(8080, () => {
    console.log('Listening on port 8080')
})

//https://phoenixnap.com/kb/telnet-windows

//in cmd write :
//1. to activate the telnet in windows :- pkgmgr /iu:"TelnetClient"
//2. to establish a connection between telnet client and server :- telnet 127.0.0.1 8080
