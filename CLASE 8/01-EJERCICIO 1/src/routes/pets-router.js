import { Router } from "express";
//importamos el uploader (multer)
import { uploader } from "../utils.js";
const router = Router();
const pets = []; //db - gestion de informacion

router.get("/",(req,res)=>{
    res.send({pets});
})
router.post("/",uploader.single("thumbnail"),(req,res)=>{
    //estamos poniendole nombre al archivo.
    const filename = req.file.filename;
    if(!filename){
        return res.send({
            status:"error",
            message: "No se pudo cargar la imagen"
        })
    }
    const pet = req.body;
    pet.thumbnail = `http://localhost:8080/images/${filename}`;
    pets.push(pet);
    res.send({
        status: "success",
        message: pets
    })
})

export default router;