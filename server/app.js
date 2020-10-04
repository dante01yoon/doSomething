const app = require("express");
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const PORT = 3000;

server.listen(PORT, function(){
    console.log(`server on:${PORT}`);
});

io.on('connection', function(socket){
    socket.emit('ping', "connection success"); 
});
