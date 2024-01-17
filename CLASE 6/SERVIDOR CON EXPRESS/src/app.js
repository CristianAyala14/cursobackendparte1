import express from "express";
const PORT = 8080;
//rutas
const app = express();
app.get("/saludo", (req, res)=>{
    res.send("HOLA CODES DESDE servidor EXPRESS")
})
app.listen(PORT, ()=>{console.log(`Servidor funcionando en el puerto ${PORT}`)})
