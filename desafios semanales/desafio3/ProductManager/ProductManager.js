import fs from "fs";

export default class ProductManager{
    
    path = "./files/products.json";

    
    getProducts = async () => {
        try {
            if (fs.existsSync(this.path)) {
                const data = await fs.promises.readFile(this.path, "utf-8");
                const products = JSON.parse(data);
                return products;
            } else {
                return [];
            }
        } catch (error) {
            console.error('Error reading file:', error);
            throw new Error('Error reading file');
        }
    }


    addProduct = async (product) => {
        try {
            const products = await this.getProducts();
    
            if (products.length === 0) {
                product.id = 1;
            } else {
                product.id = products[products.length - 1].id + 1;
            }
    
            products.push(product);
    
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
    
        } catch (error) {
            return "El archivo no pudo ser escrito.";
        }
    }


    getProductById= async(id)=>{
        try {
            const products = await this.getProducts();
            let find_product_by_id = products.find((el)=> el.id == id)
            if(find_product_by_id){
                return find_product_by_id;
            }else{
                return "Not found."
            }    
        } catch (error) {
            return "Error en la ejecucion.";
        }
        
    }

    //copiado de chat gpt, HAY QUE INVESTIGAR.
    updateProduct = async (id, updateFields) => {
        const products = await this.getProducts();
        const productIndex = products.findIndex(el => el.id === id);
    
        if (productIndex !== -1) {
            // Actualizar los campos del producto
            Object.assign(products[productIndex], updateFields);
    
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
        } else {
            return "El producto no se encuentra en la lista.";
        }
    }
    

    deleteProduct = async (id) => {
        try {
            const products = await this.getProducts();
            const productIndex = products.findIndex(el => el.id === id);
    
        if (productIndex !== -1) {
            products.splice(productIndex, 1);
        } else {
            return "El producto no se encuentra en la lista.";
        }
        await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
        } catch (error) {
            return "Error en la ejecucion.";

        }
        
    }

}


