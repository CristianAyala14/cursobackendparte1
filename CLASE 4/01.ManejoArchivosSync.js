//FYLE SYSTEM, MANEJA ARCHIVOS PARA CREAR LEER ACTUALIZAR O ELIMINAR. ES DE NODE JS.
/*
writeFileSync = Escribir contenido (si el archivo no existe lo crea, si existe lo sobreescribe.)
readFileSync = Para obtener el contenido de un archivo
appendFileSync= Para añadir contenido a un archivo. Nose sobreescribe.
unlinkSync = Es el "delete" de los archivos. elimina todo el archivo. no solo el contenido
existsSync = Corrobora que un archivo exista
*/

//usando FL de manera sincrona: SYNC

const fs = require("fs");
fs.writeFileSync("./bd.txt", "Guardo info en un archivo")
if(fs.existsSync("./bd.txt")){
    let contenido = fs.readFileSync("./bd.txt", "utf-8")
    console.log(contenido)
    fs.appendFileSync("./bd.txt", "- Mas contenido")
    contenido = fs.readFileSync("./bd.txt", "utf-8")
    console.log(contenido)
    //fs.unlinkSync("./bd.txt")
}

