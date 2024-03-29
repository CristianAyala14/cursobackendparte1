import {Router} from "express";
import userModel from "../models/userModel.js";
import {createHash, validatePassword} from "../utils.js";
import passport from "passport";
const router = Router();


//rutas de autenticacion con paswoord y email
// router.post("/register", async(req,res)=>{
//     const {first_name, last_name, email, age, password} = req.body;
//     const exists = await userModel.findOne({email});
//     if(exists){
//         return res.status(400).send({
//             status: "error",
//             error: "Ya existe un usuario registrado con ese correo electronico."
//         })
//     }
//     const user = {
//         first_name,
//         last_name,
//         email,
//         age,
//         password: createHash(password)
//     }
//     let result = await userModel.create(user)

//     res.send({
//         status: "success",
//         message: "Usuario registrado correctamente."
//     })
// })
//register con autenticacion: 
router.post("/register", passport.authenticate("register", {failureRedirect: "/api/sessions/failregister"}), async(req,res)=>{
    res.send({
        status: "success",
        message: "User registrado."
    })
})
router.get("/failregister", async(req,res)=>{
    console.log("Fallo el registro")
    res.send({error: "fallo en el registro"})
})
// router.post("/login", async(req,res)=>{
//     const {email, password} = req.body;
//     const user = await userModel.findOne({email})
//     if(!user){
//         return res.status(400).send({
//             status: "error",
//             error: "Datos incorrectos."
//         })
//     }
//     //validacion password bcrypt
//     const isValidPassword = validatePassword(password, user)
//     if(!isValidPassword){
//         return res.status(400).send({
//             status: "error",
//             error: "Datos incorrectos."
//         })
//     }

//     req.session.user = {
//         full_name: `${user.first_name} ${user.last_name}`,
//         email: user.email,
//         age: user.age
//     }
//     res.send({
//         status: "success",
//         payload: req.session.user,
//         message: "Mi primer login"
//     })
// })
//login con autenticacion:
router.post("/login", passport.authenticate("login", {failureRedirect: "/api/sessions/faillogin"}), 
async(req,res)=>{
    if(!req.user){
        return res.status(400).send({status: "error"})
    }
    req.session.user = {
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        age: req.user.age,
        email: req.user.email
    }
    res.send({
        status: "success",
        payload: req.session.user
    })
})
router.get("/faillogin", (req,res)=>{
    res.send({error: "fail login"})
})

//rutas de autenticacion de terceros: github (dos rotas)
router.get("/github", passport.authenticate("github", {scope: ["user: email"]}), async (req, res)=>{} )
router.get("/githubcallback", passport.authenticate("github", {failureRedirect: "/login"}), async (req, res)=>{
    req.session.user = req.user
    res.redirect("/")
});


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
router.post("/restartPassword", async(req,res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).send({
            status: "error",
            error: "Datos incorrectos."
        })
    }
    const user = await userModel.findOne({email});
    if(!user){
        return res.status(400).send({
            status: "error",
            error: "No existe el usuario."
        })
    }

    const newHashPassword = createHash(password);

    await userModel.updateOne({_id: user._id},{$set:{password: newHashPassword}})

    res.send({
        status: "success",
        message: "Contraseña restaurada."
    })
})
export default router;