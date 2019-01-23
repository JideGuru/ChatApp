const ws = new WebSocket("ws://localhost:3232");

document.forms[0].onsubmit = ()=>{
    let input = document.getElementById("message");
    // console.log(document.getElementById("message"));

    ws.send(input.value);


}