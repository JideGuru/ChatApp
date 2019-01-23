const ws = new WebSocket("ws://localhost:3232");


ws.onmessage = (payload)=>{

    console.log(payload.data);
    displayText(payload.data);
}

ws.onopen = ()=>{

    displayTitle("Connected to server")
    console.log("Connection opened");
}

ws.onclose = ()=>{

    displayTitle("Disconnected to server")
    console.log("Connection closed");
}

function displayTitle(title){

    document.querySelector('h1').innerHTML = title;
}

function displayText(text){

    let h1 = document.createElement('h5');
    h1.innerText = text;
    document.querySelector('div.messages').appendChild(h1);
}

document.forms[0].onsubmit = ()=>{
    let input = document.getElementById("message");
    // let input1 = document.getElementById("username");
    // console.log(document.getElementById("message"));

    ws.send(input.value);
    // ws.send(input1.value);


}