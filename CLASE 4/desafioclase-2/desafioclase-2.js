//const fs = require("fs");
import fs from "fs"; //de esta forma se trabaja realmente la linea anterior
//si dieras clg a esta linea, te saldra "cannot use import statement outside a module, es por eso que en el archivo package.json que iniciamos, abajo de descripcion ponemos "type": "module" " Usamos import por que a diferencia del requiere, es ASINCRONO. (una ves hecho lo del package.json ahora no se podra usar require)

import {Blob} from "buffer"; //modulo propio de node que sirve para poner el size osea tamaño en byte del archivo.

//so..

const enviroment = async ()=>{
    try {
        const data = await fs.promises.readFile("./package.json", "utf-8")
        const contenidoString = data;
        const contenidoOBJ = JSON.parse(data);
        const size = new Blob([data]).size; //chekear doc de Blob para mas info
        const info = {contenidoString,contenidoOBJ,size}
        console.log(info)
        await fs.promises.writeFile("./info.json", JSON.stringify(info, null, "\t")) // si no pusieras null y el t, te lo pasaria sin identar

    } catch (error) {
        console.log(error)
    }
}
enviroment()

