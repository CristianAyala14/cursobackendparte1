import express from "express";
import __dirname from "./utils.js";
import { CartRouter } from "./routes/cart-route.js";
import { ProductsRouter } from "./routes/products-route.js";

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/public`))
const server = app.listen(PORT, ()=>{
    `El servidor funciona en el puerto: ${PORT}`
})

//routes
app.use("/api/carts",CartRouter)
app.use("/api/products", ProductsRouter)