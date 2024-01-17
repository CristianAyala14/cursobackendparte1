//HANDLEBARS
import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import users from "./users.js";

const PORT = 8080;
const app = express();
//inicializamos el motor
app.engine("handlebars", handlebars.engine()) // y seria un minddleware
//aca podemos configurar variables de la aplicacion
//primer app.set, determina que el motor este conectado con la carpeta views
app.set("views", __dirname + "/views"); //seteamos donde estaran las vistas
//configuramos la variable para que apunte al motor de plantillas que queremos utilizar
app.set("view engine", "handlebars")
const server = app.listen(PORT,()=>{
    console.log(`Servidor funcionando en el puerto: ${PORT}`)
})




//probamos

app.get("/",(req,res)=>{
    const randomUser = users[Math.floor(Math.random()*users.length)]
    res.render("index", randomUser)
})