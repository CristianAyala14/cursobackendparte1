//nota para desafio 3: importamos la class product manager.
//en los endpoints get, hacermos que sean asyincronos los callbacks
//dsp cuando hagamos  const products = await productsmanager.getproduct.y asi dentro del endpoint. 
//res.send({products})
//la clase la inicialiazria en este contexto app.js
import express from "express";
const PORT = 8080;
const app = express();
app.use(express.urlencoded({extended:true}))
app.listen(PORT, ()=>{console.log(`Servidor funcionando en el puerto:  ${PORT}`)})
const usuarios =[
    {id: "1", nombre: "Mauro", apellido: "Espinosa", genero:"F"},
    {id: "2", nombre: "Carlos", apellido: "Perez", genero:"M"},
    {id: "3", nombre: "Sebastian", apellido: "Ayala", genero:"F"},
    {id: "4", nombre: "Esteban", apellido: "Benitez", genero:"M"},
    {id: "5", nombre: "Raul", apellido: "Casablanca", genero:"M"},
    {id: "6", nombre: "Florencia", apellido: "Perasso", genero:"F"},
]
app.get("/",(req,res)=>{
    const genero = req.query.genero;
    if(!genero || (genero!=="M" && genero!=="F")){
        return res.json({usuarios})
    }
    const usuariosFiltrados = usuarios.filter(el=>{
        return el.genero ===genero
    })

    res.json(usuariosFiltrados)

})


//localhost:8080"?genero=M" asi lo pido
