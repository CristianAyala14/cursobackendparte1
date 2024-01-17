import express from "express";
const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true})); //cuando pasamos opciones a una funcion se pasa por lo general como un objeto. Por eso extended opcion true. Para que peuda aceptar cualqueir tipo de archivo.
app.listen(PORT,()=>{
    console.log(`Servidor funcionando en el puerto: ${PORT}`)
})
let frase = "Frase inicial";
app.get("/api/frase", (res,req)=>{
    res.send({frase})
})
app.get("api/palabras/:pos",(req,res)=>{
    const pos = req.params.pos
    const parsePos = parseInt(pos)
    const palabras =frase.split("")
    if(parsePos<=0 || parsePos>palabras.length){
        return res.status(400).send({
            status: "error",
            error: "Pos fuera de rango"
        })
    }
    res.send({
        palabra: palabras[parsePos-1]
    })
})

app.post("/api/palabras/", (req,res)=>{
    const palabra = req.body.palabra;
    frase = frase + ` ${palabra}`
    res.send({
        palabra,
        pos: frase.split(" ").length
    })
})
app.put("/api/palabras/:pos", (req,res)=>{
    const pos = req.params.pos;
    const palabra = req.body.palabra;

    const parsePos = parseInt(pos);
    const palabras = frase.split(" ");

    const anterior = palabras[parsePos-1]
    palabras[parsePos-1] = palabra;
    frase = palabras.join(" ")
    res.send({
        actualizada: palabra,
        anterior
    })
})
pp.delete("/api/palabras/:pos", (req,res)=>{
    const pos = req.params.pos;
    const parsePos = parseInt(pos);
    const palabras = frase.split(" ");
    const palabraEliminada = palabras[parsePos-1];
    palabras.splice(parsePos-1,1)
    frase = palabras.join(" ");
    res.send({
        status: "Correcto",
        eliminada: palabraEliminada
    })
})