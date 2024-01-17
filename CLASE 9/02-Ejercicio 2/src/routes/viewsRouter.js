import { Router } from "express";
const router = Router();

router.get("/foods", (req,res)=>{
    const foods = [
        {name: "caramelo" , price: 20},
        {name: "banana" , price: 10},
        {name: "pera" , price: 5},
        {name: "frutilla" , price: 30},
    ];

    const user = {
        firtsname: "Franco",
        lastname: "jalil",
        isAdmin: true
    };

    res.render("foods", {foods, isAdmin: user.isAdmin, style: "index"})
})

router.get("/register", (req,res)=>{
    res.render("register");
})

export {router as foodsRouter};
