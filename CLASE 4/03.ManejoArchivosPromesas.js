//asincrona con Promesas: fs.promises  (se inidica q es asincrono pero en ves de manipular con callbacks es con .then - .catch o bien async-await)
/*
fs.promises.writeFile
fs.promises.readFile
fs.promises.appendFile
fs.promises.unlink
*/

const fs = require("fs")
//como la operacion es asincrona vamos a envolver todo en una funcion
//sin manejar el error. CON ASYNC 7 AWAIT
const operacionesAsincronas = async ()=>{
    await fs.promises.writeFile("./bd-promesas.txt", "Hola coders")
    let contenido = await fs.promises.readFile("./bd-promesas.txt", "utf-8")
    console.log(contenido);
    await fs.promises.appendFile("./bd-promesas.txt", "- Mas contenido")
    contenido = await fs.promises.readFile("./bd-promesas.txt", "utf-8")
    fs.promises.unlink("./bd-promesas.txt")
}
operacionesAsincronas()

//manejando el error con try and catch
const operacionesAsincronas2 = async ()=>{
    try{
        await fs.promises.writeFile("./bd-promesas.txt", "Hola coders")
    }catch(error){
        console.log("error al escribir en el archivo")
    }
    try{
        let contenido = await fs.promises.readFile("./bd-promesas.txt", "utf-8")
        console.log(contenido);
    }catch(error){
        console.log("error al leer en el archivo")
    }
    try{
        await fs.promises.appendFile("./bd-promesas.txt", "- Mas contenido")
        contenido = await fs.promises.readFile("./bd-promesas.txt", "utf-8")
    }catch(error){
        console.log("error al escribir en el archivo")
    }
    try{
        fs.promises.unlink("./bd-promesas.txt")
    }catch(error){
        console.log("error al borrar el archivo")
    }


}
operacionesAsincronas2()
