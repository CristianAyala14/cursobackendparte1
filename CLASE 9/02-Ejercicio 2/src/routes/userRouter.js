import { Router } from "express";
const router = Router();
const users = [];
router.get("/", (req,res)=>{
    res.send(users);
})

router.post("/", (req,res)=>{
    const {username, email, password} = req.body

    const newUser ={
        username,
        email,
        password
    }
    users.push(newUser)
    res.send(newUser)
})

export {router as userRouter};