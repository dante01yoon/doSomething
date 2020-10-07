const app = require("express");
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const Channel = require("./data/channel");
const Chat = require("./data/chat");
const Score = require("./data/score");

const PORT = 3000;

const CHANNEL_USER = {} // 유저가 어느 채널에 접속했는지에 대한 데이터 정보 
const CHANNEL_DATA = {} // 채널별로 가지고 있는 채널객체 

for(let i =0; i < 5; i++){
    const score = new Score();
    const chat = new Chat();
    const channel = new Channel();
    CHANNEL_DATA[`ch.${i}`] = channel;
}

server.listen(PORT, function(){
    console.log(`server on:${PORT}`);
});

io.on('connection', function(socket){
    // 채널 접속 
    socket.on('/channel', (data) => {
        let { name, channel } = data;
        if(!CHANNEL_USER[name]) {
            CHANNEL_USER[name] = channel
            socket.emit('/channel/complete', {
                status: 200,
                chats: CHANNEL_DATA[channel].getChats(),
                scores: CHANNEL_DATA[channel].getScores()
            });
        } else {
            socket.emit('/channel/fail', {status: 200, msg: "이미 등록된 유저입니다."})
        }
    });

    // 랭킹 등록
    socket.on('/rank', (data) => {
        let {name} = data;
        let channel = CHANNE_USER[name]
        CHANNE_DATA[channel].addScore(data)

        socket.emit('/rank/complete', {status: 200}); 
    });

    // 채팅 발생 
    socket.on('/chat', (data) => {
        let {name} = data; 
        let channel = CHANNEL_USER[name];
        CHANNEL_DATA[channel].addMsg(data);
        socket.emit('/chat/complete', {status: 200});
    })
    
    
});
