import express from "express"
const PORT = 8080;
const app = express();
app.use(express.urlencoded({extended_true})) //
app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto: ${PORT}`)
})
//simulamos db
const usuarios =[
    {id: "1", nombre: "Mauro", apellido: "Espinosa", edad:25},
    {id: "2", nombre: "Carlos", apellido: "Perez", edad:22},
    {id: "3", nombre: "Sebastian", apellido: "Ayala", edad:26},
]

app.get("/",(req,res)=>{
    res.json(usuarios)
} )
app.get("/:idUsuario", (req,res)=>{
    const idUsuario = req.params.idUsuario;
    const usuario = usuarios.find(el=> el.id === idUsuario)
    if(!usuario){
        return res.send({error: "El usuario no fue encontrado"})
    }else{
        res.json({usuario})
    }
})