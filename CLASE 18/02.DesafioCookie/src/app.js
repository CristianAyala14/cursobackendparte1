import express from "express";
import session from "express-session";

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    //opciones del session. 3 parametros
    secret: "SecretCoder" ,
    resave: true,
    saveUninitialized: true
}));

app.listen(PORT, ()=>{
    console.log(`Funciona en: ${PORT}`)
})

let contador = 1;

app.get("/", (req,res)=>{
    const nombre = req.query.nombre;
    if(!req.session.user){
        req.session.user = {
            nombre
        }
        return res.send(`Bienvenido, ${req.session.user.nombre}`)
    }else{
        return res.send(`Hola ${req.session.user.nombre}. Has visitado esta ruta ${++contador} veces`)
    }
})

