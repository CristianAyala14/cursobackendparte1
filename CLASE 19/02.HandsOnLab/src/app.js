import express from "express";
import session from "express-session";
import mongoStore from "connect-mongo";
import mongoose from "mongoose";
import {engine} from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from "./routes/viewsRouter.js"
import sessionsRouter from "./routes/sessionsRouter.js"

const PORT = 8080;
const app = express();
const MONGO = "mongodb+srv://cristianpabloayala:nolimit14@cluster1.3xzue7l.mongodb.net/firstlogin";
const connection = mongoose.connect(MONGO)
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/public`))
app.use(session({
    store: new mongoStore({
        mongoUrl: MONGO,
        ttl: 3600
    }),
    secret: "CoderSecret",
    resave:false,
    saveUninitialized: false
}))
app.engine("handlebars", engine());
app.set("view engine", "handlebars")
app.set("views", __dirname + "/views")



app.use("/", viewsRouter);
app.use("/api/sessions", sessionsRouter)

app.listen(PORT, ()=> console.log(`Servidor: ${PORT}`))







