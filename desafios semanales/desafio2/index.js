import ProductManager from "./ProductManager/ProductManager.js";

const productManager = new ProductManager();
const env = async()=>{
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
        let productos = await productManager.getProducts()
        console.log(productos)
}

env();


