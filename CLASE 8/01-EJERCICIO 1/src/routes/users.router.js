import { Router } from "express";
const router = Router();
const users = []; //db - gestion de informacion

router.get("/", (req,res)=>{
    res.send({users});
})
router.post("/",(req,res)=>{
    const user = req.body;
    users.push(user);
    res.send({
        status: "success",
        message: users
    })
})

export default router;