import __dirname from "./utils.js";


import mongoose from "mongoose"
import express from "express";
import {engine} from "express-handlebars";
//como no vamos a hacer rutas vamos a importar el model aca.
import studentsModel from "./models/studentsModel.js"


//server y mongo conneccion
const MONGO = "mongodb+srv://cristianpabloayala:nolimit14@cluster1.3xzue7l.mongodb.net/PruebaAgregation";
const app = express();
mongoose.connect(MONGO);
const PORT = 8080;
app.listen(PORT,()=>{
    console.log("Server listening on port 8080")
})
//instalamos el handlebars
app.engine("handlebars", engine()); 
app.set("view engine", "handlebars");
app.set("views", __dirname+"/views");


//hacemos una sola ruta sobre la app
app.get("/students", async (req, res)=>{
    const page = req.query.page; // o const {page} = req.query; (en el segundo ejemplo estoy trayendo todas los conjuntos de clave valor que hay en la consulta query, como solo usamos uno puedo usarlo asi.)
    const students = await studentsModel.paginate( //aca siempre van 2 parametros (en forma de objetos con condiciones)
        {}, //page(filtro si es que hubiera, de la consulta)
        {limit: 5, lean: true, page: page?? 1}, //limit (limite de las paginas que va a traer, y lean en true para que devuela objetos javascripts, y dsp propiedad page: sera page y si viene vacia devuelve solo pagina 1..)
    )

    res.render("students",{students});
})