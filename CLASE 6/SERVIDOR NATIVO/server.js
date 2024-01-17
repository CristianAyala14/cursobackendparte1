//INSTALAMOS NODEMON CON NPM I NODEMN y corrimos el local host con nodemon
import http from "http";

const PORT = 8080; //creamos el puerto
//crear servidor:

const server = http.createServer((request, response) =>{
    response.end("Mi primer hola mundo desde el backend. SAPE   ")
})

server.listen(PORT, ()=>{console.log(`Servidor funcionando en el puerto: ${PORT}`)})
