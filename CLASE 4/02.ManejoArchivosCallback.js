//asincrona con callbacks: similar a operaciones sincronicas, solo que alfinal usara un ultimo argumento. Un callback.
/*
writeFile (solo error)
readFile (error 7 resultado)
appendFile (solo error)
unlink (solo error)
*/

const fs = require("fs");
fs.writeFile("./bd.txt", "HOLA DESDE CALLBACK", (error)=>{   
    if(error) return console.log("error al escribir archivo")
    fs.readFile("./bd.txt","utf-8", (error, contenido)=>{
        if(error) return console.log("error al leer archivo");
        console.log("Nivel 1",contenido);
        fs.appendFile("./bd.txt","-Mas info para el archivo",(error)=>{
            if(error) return console.log("error al actualizar archivo")
            fs.readFile("./bd.txt", "utf-8",(error,data)=>{
                if(error) return console.log("error al leer archivo")
                console.log("nivel 2", data)
                fs.unlink("./bd.txt", (error)=>{
                    if(error) return console.log("Error al borrar archivo")
                })
            })
        })
    })
})

