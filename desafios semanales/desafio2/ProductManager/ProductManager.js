import fs from "fs";

export default class ProductManager{
    
    path = "./files/products.json";

    
    getProducts= async()=>{
        if(fs.existsSync(this.path)){
            try {
                const data = await fs.promises.readFile(this.path, "utf-8")
                const products = JSON.parse(data);
                return products
            } catch (error) {
                return "El archivo no pudo ser leido."
            }
            
        }else{
            return [];
        }
    }


    addProduct = async(product)=>{
        const products = await this.getProducts();
        if(products.length  ===0){
            product.id = 1
            products.push(product)

            try {
                await fs.promises.writeFile(this.path, JSON.stringify(products,null,'\t'))
            } catch (error) {
                return "El archivo no pudo ser escrito."
            }
        }else{
            product.id = products[products.length - 1].id + 1;
            let productlocated = products.find((el) => el.id == product.id);
            if (productlocated) {
                return "El producto ya se encuentra agregado.";
            } else {
                products.push(product)
                try {
                    await fs.promises.writeFile(this.path, JSON.stringify(products,null,'\t'))
                } catch (error) {
                    return "El archivo no pudo ser escrito."
                }
            }
        }
        
    }


    getProductById= async(id)=>{
        const products = await this.getProducts();
        let find_product_by_id = products.find((el)=> el.id == id)
        if(find_product_by_id){
            return find_product_by_id;
        }else{
            return "Not found."
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
        const products = await this.getProducts();
        const productIndex = products.findIndex(el => el.id === id);
    
        if (productIndex !== -1) {
            products.splice(productIndex, 1);
            try {
                await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
            } catch (error) {
                return "El archivo no pudo ser escrito."
            }
        } else {
            return "El producto no se encuentra en la lista.";
        }
    }

}


