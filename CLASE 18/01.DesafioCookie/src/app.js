import express from "express";
import handlebars from "express-handlebars";
import cookieParser from "cookie-parser";
import __dirname from "./utils.js";

const PORT = 8080;
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"))
//handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname+"/views");
app.set("view engine", "handlebars")
app.listen(PORT, ()=> console.log(`El servidor funcionando en puerto: ${PORT}`));

//routes

app.get("/", (req,res)=>{
    res.render("cookies") 
})

app.post("/cookie", (req,res)=>{
    const data = req.body;
    res.cookie("CoderCookie", data, {maxAge: 10000})
    .send({
        status: "succes", 
        message: "cookie set"
    });
})
