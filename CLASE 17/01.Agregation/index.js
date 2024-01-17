import mongoose from "mongoose";
import orderModel from "./orderModel.js";
import orders from "./orders.js";

const MONGO = "mongodb+srv://cristianpabloayala:nolimit14@cluster1.3xzue7l.mongodb.net/PruebaAgregation"
const main = async()=>{
    await mongoose.connect(MONGO).then((callback)=>{console.log("Mongo Online")})//podemos hacer que la coneccion a mongo funcione como promesa y devolver un callback.

    //await orderModel.insertMany(orders) una ves ejecutado lo comento para q si tengo q vovler a ejecutar no me los vuelva a cargar. 
    //console.log(await orderModel.find()) lo mismo q arriba.

    //hago la request aggregate a la db
    const orders = await orderModel.aggregate([
        //stages (esto seria mi pipeline de stages)
        {$match: {size: "medium"} }, 
        {$group: {_id: "$name", totalQuantity: {$sum: "$quantity"}}}, //agrupamos y como group genera un id para cada grupo, le decimos que ese id sera el nombre del sabor de cada piza. OSEA las de medium las agrupamos con id sabor de pizas.
        {$sort: {totalQuantity: -1}},
        {$group:{_id:1, orders: {$push:"$$ROOT"}}}, //??? es como que con el push root toma todo el array que viene en las stages se guarda en "orders". Osea el push genera el array final que contendra el array que se va formando con las stages anteriores.
        {$project: {"_id": 0, orders: "$orders"}}, //aca le damos un id a orders. (el id que genera group es solo para la fase de agrupar, pero proyect le da el id final.) se usa 0 para que sepa que tiene q generar un id nuevo.
        {$merge: {into: "reports"}} //aca guardamos. y lo inserta en coleccion reports. va siempre al final
    ])
    console.log(orders)
}
main();






 //group se compone por primero el campo id, y dsp los campos sobre los cuales se realizaraon operaciones de agregacion. 
          /*
           
            {$group: {
                 _id: <expression>,  // Campo por el cual se agruparán los documentos
                 <field1>: { <accumulator1> : <expression1> },
                 <field2>: { <accumulator2> : <expression2> },
            }
            //los acummulator serian: $sum, $avg, $first, $last, $max, $min
             

           */

