import express from "express";
import ProductManager from "../ProductManager/ProductManager.js";

const app = express();
const PORT = 8080;
app.use(express.json()); //necesario para que funcione el express con POST. 
app.use(express.urlencoded({ extended: true })); //sin esta linea el servidor no sabrea como interpretar los objetos obtenidos
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
const productManager = new ProductManager();

app.get("/", (req, res) => {
    res.send("<h1>ESTO ES EL INICIO</h1>");
});

app.get("/products", async (req, res) => {
    try {
        const limit = req.query.limit;
        const products = await productManager.getProducts();
        console.log(products)
        if (limit) {
            const limitedProducts = products.slice(0, parseInt(limit));
            res.json(limitedProducts);
        } else {
            res.json(products);
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
    });

app.get("/products/:id", async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productManager.getProductById(productId);
        if (product === "Not found.") {
            res.status(404).json({ error: "Product not found" });
        } else {
            res.json(product);
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});



const env = async()=>{
    try {
        let product ={
            id: 1,
            title: "arroz",
            description: "Arroz blanco bajo en almidon marca Prime",
            price: 24,
            img: "",
            code: 2343,
            stock: 50
        }
        await productManager.addProduct(product) 
    } catch (error) {
        return "Error en la ejecucion"
    }
    
}


env();
env();
env();