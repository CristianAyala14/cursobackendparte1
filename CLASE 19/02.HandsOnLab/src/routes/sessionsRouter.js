import {Router} from "express";
import userModel from "../models/userModel.js";
import { createHash } from "../../../../CLASE 20/02.HandsOnLab/src/utils.js";

const router = Router();

router.post("/register", async(req,res)=>{
    const {first_name, last_name, email, age, password} = req.body;
    const exists = await userModel.findOne({email});
    if(exists){
        return res.status(400).send({
            status: "error",
            error: "Ya existe un usuario registrado con ese correo electronico."
        })
    }
    const user = {
        first_name,
        last_name,
        email,
        age,
        password
    }
    let result = await userModel.create(user)

    res.send({
        status: "success",
        message: "Usuario registrado correctamente."
    })
})
router.post("/login", async(req,res)=>{
    const {email, password} = req.body;
    const user = await userModel.findOne({email, password})
    if(!user){
        return res.status(400).send({
            status: "error",
            error: "Datos incorrectos"
        })
    }
    req.session.user = {
        full_name: `${user.first_name} ${user.last_name}`,
        email: user.email,
        age: user.age
    }
    res.send({
        status: "success",
        payload: req.session.user,
        message: "Mi primer login"
    })
})
router.get("/logout", async(req,res)=>{
    req.session.destroy(err=>{
        if(err){
            return res.status(500).send({
                status: "error",
                message: "Nose pudo desloguear."
            })
        }
        res.redirect("/login");
    })
})

export default router;