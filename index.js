const WebSocket = require('ws').Server;
const wss = new WebSocket({port:3232});

wss.on('connection', (ws)=>{

    console.log("We Are Connected")

    ws.on('message', (message)=>{


        wss.clients.forEach((client)=>{
            client.send(message)
        });
        console.log(message)
    })
})