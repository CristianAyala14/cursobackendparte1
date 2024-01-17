//en este js trabajamos sin rutas y hacemos todo secuencial solo para entender el ejemplo de encontrar por indice
import mongoose from "mongoose";
import fs from "fs";
import userModel from "./userModel.js";

//carga la data al modelo de usuarios . Me guarda la informacion que yo tengo en mongo(aca por lo que veo me lee del json y me lo guarda en mongo)
const seedData = async ()=>{
    const data = JSON.parse(fs.readFileSync("./Users.json"))
    const response = await userModel.insertMany(data)
    console.log(response)
}

//vamos a hacer una query para que me traiga una de todos los registros. Uno de todos los registros
//encontrar el nombre celia y traer las estadisticas de la busqueda
const queryData = async ()=>{
    const response = await userModel.find({first_name: "Celia"}).explain("executionStats");
    console.log(response.executionStats) //aca consoleo la excecution
}   
    
const MONGO = "mongodb+srv://cristianpabloayala:nolimit14@cluster1.3xzue7l.mongodb.net/Prueba1";
    
const main = async ()=>{
        await mongoose.connect(MONGO)
        //await seedData();
        await queryData();
        mongoose.connection.close();
}

main();