import express from "express";
import mongoose from "mongoose";
import __dirname from "./utils.js";
//routes import
import userRoute from "./routes/usersRoute.js";
import viewRouter from "./routes/viewRouter.js"
import {engine} from "express-handlebars";


//server
const PORT = 8080;
const app = express();
const server = app.listen(PORT, ()=>{
    `El servidor funciona en el puerto: ${PORT}`
})
//middlewires
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/public`))
app.engine("handlebars", engine());
app.set("view engine", "handlebars")
app.set("views", __dirname + "/views")


//mongoDB
const MONGO = "mongodb+srv://cristianpabloayala:C1r2i3s4_14@cluster0.lajwnpu.mongodb.net/PracticaMongoDB"
const connection = mongoose.connect(MONGO)


//routes
app.use("/api/users",userRoute)
app.use("/",viewRouter) //como es vista siempre empieza en la raiz

//.
