//para trabajar con socket se debe instalar express /express-handlebars y socket.ios
import express, { urlencoded } from "express";
import handlebars from "express-handlebars"
import __dirname from "./utils.js";
import {Server} from "socket.io"; //este server se instalara a partir del server http.
//rutas
import { ViewsRouter } from "./routes/viewsRouter.js";

//variables utilizadas:
let messages = []
//inicializamos servidor
const PORT = 8080;
const app = express();
const httpServer = app.listen(8080, ()=>{
    return console.log(`Server in port: ${PORT}`)
})
//middlewares necesarios para nuestro servidor
app.use(urlencoded({extended: true}))
app.use(express.json())
//asi aplicamos websocket
const socketServer = new Server(httpServer); 
//aca instalamos el motor de plantilla
app.engine("handlebars",handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname+"/views");
//establecemos public como alojamiento de files statios
app.use(express.static(__dirname + "/public"))

//aplicamos rutas
app.use("/", ViewsRouter)//que levante la ruta de views


socketServer.on("connection", socket =>{
    console.log("Nuevo cliente conectado.")
    socket.on("message", data=>{
        console.log(data)
    })

    socket.emit("evento_para_mi_solo", "Evento solo para el que se conecto") 
    socket.broadcast.emit("evento_no_para_mi_solo", "Hola soy un nuevo participante.")
    socketServer.emit("evento_para_todos", "Hay nuevos participantes. No violar politicas de comunicacion")
    //1
    socket.on("input-message", (data)=>{
        socketServer.emit("input-message", data)
    })
    //2
    socket.on("chat-message", (data)=>{
        const newMessage = {socketId: socket.id, message: data}
        messages = [...messages, newMessage];
        socketServer.emit("chat-messages-update", messages)
    })

})