import express from "express";
const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true})); //cuando pasamos opciones a una funcion se pasa por lo general como un objeto. Por eso extended opcion true. Para que peuda aceptar cualqueir tipo de archivo.
app.listen(PORT,()=>{
    console.log(`Servidor funcionando en el puerto: ${PORT}`)
})

//metodos.
//creamos una base de datos en memoria.
const users = [];

//GET:
app.get("/api/user", (req,res)=>{
    res.status(200).send({
        status: "Correcto",
        users
    })
}) 
//POST
app.post("/api/user", (req,res)=>{
    let cantUsers = users.length;
    let user = req.body;
    if(!user.first_name || !user.last_name){
        return res.status(400).send({
            status: "error",
            error: "Valores incompletos"
        })
    }
    user.id = cantUsers++;
    users.push(user)
    res.status(200).send({
        status:"Correcto",
        message: "Usuario creado",
        users 
    })
})
//PUT
app.put("/api/user/:uid", (req,res)=>{
    
})
//DELETE
app.delete("/api/user/:uid", (req,res)=>{
    let uId = req.params.uid
    const userIndex = users.findIndex((el)=>el.id == uId)
    if(userIndex==-1){
        return res.status(400).send({
            status: "error",
            error: "Usuario no existe"
        })
    }
    users.splice(userIndex, 1);
    res.send({
        status: "Correcto",
        message: "Usuario eliminado"
    })
})