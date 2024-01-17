//ALMACENAR FECHA Y HORA: CREAR UN ARCHIVO QUE GUARDE FECHA Y HORA ACTUAL. POSTERIORMENTE LEER EL ARCHIVO Y MOSTRAR EL CONTENIDO EN CONSOLA. UTILIZAR FS CALLBACK.


const fs = require("fs");

const Fecha = new Date().toLocaleDateString();
const Hora = new Date().toLocaleTimeString()
fs.writeFile("./tarea.txt", `Fecha: ${Fecha} - Hora: ${Hora}`,  (error)=>{
    if(error) return console.log("Error al escribir archivo") // o retornas error y listo
    fs.readFile("./tarea.txt", "utf-8", (error, result)=>{ //archivo, formato y callback con parametro error y contenido
        if(error) return console.log("Error al leer el archivo")
        console.log("El archivo contiene: ",result)
    })
})