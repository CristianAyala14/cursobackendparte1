import express, { urlencoded } from "express";
import handlebars from "express-handlebars"
import __dirname from "./utils.js";
import path from "path";
import { foodsRouter } from "./routes/viewsRouter.js";
import { userRouter } from "./routes/userRouter.js";

const PORT = 8080;
const app = express();
app.use(urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.engine("handlebars", handlebars.engine())
app.set("view engine", "handlebars")
app.set("views", path.join(__dirname, "views"));
app.listen(PORT, ()=>{
    `El servidor funciona en el puerto: ${PORT}`
})

app.use("/", foodsRouter)
app.use("/api/users", userRouter)








