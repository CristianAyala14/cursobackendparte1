//iniciar el socket
const socket = io();
socket.emit("message", "Mensaje desde el Front") //para enviar mensaje
socket.on("evento_para_mi_solo", (data)=>{console.log(data)}) //para recibir
socket.on("evento_no_para_mi_solo", (data)=>{console.log(data)}) //para recibir
socket.on("evento_para_todos", (data)=>{console.log(data)}) //para recibir


const chatInput = document.getElementById("chat-input");

//-----------------//
chatInput.addEventListener("input", function(ev){
    socket.emit("input-message", ev.target.value) 
})
const inputMessage = document.getElementById("input-message")
socket.on("input-message", (data)=>{
    inputMessage.innerText = data;
})
//-----------------//
const sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", function(ev){
    socket.emit("chat-message", chatInput.value)
})

const chatMessages = document.getElementById("chat-messages")
socket.on("chat-messages-update", (data)=>{
    chatMessages.innerHTML = " ";

    data.forEach((el) => {
        const li = document.createElement("li")
        li.innerText = `${el.socketId}: ${el.message}`;
        chatMessages.appendChild(li)
    });
})