import {Router} from "express";
import userModel from "../models/userModel.js";

const router = Router();

router.get("/", (req,res)=>{
    res.render("register")
})

router.get("/usuarios", async(req,res)=>{
    const  users = await userModel.find().lean(); //el punto lean lo convierte en objeto que se puede iterar .
    res.render("users", {users, isAdmin: true} ) //dos parametros , primero la vista que se renderizara, y dsp el objeto que se envia. Podriamos dentro de llave dsp de una coma pasar el estilo. "style: "
})

export default router; //cuando la importe la puedo renombrar