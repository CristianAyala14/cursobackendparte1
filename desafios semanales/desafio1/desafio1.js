class ProductManager{
    constructor(){
        this.products = [];
    }
    getProducts(){
        return this.products
    }

    addProduct(title, description, price, img, code, stock){
        if (title && description && price && img && code) {
            let id_product = (this.getProducts()).length; 
            let new_product = {
                title: title,
                description: description,
                price: price,
                img: img,
                code: code,
                stock: stock,
                id: ++id_product,
            };
            let productlocated = this.products.find((el) => el.id == new_product.id);
            if (productlocated) {
                return "El producto ya se encuentra agregado.";
            } else {
                this.products.push(new_product);
            }
        } else {
            return "Todos los campos son obligatorios. Por favor, complete la información del producto.";
        }    
    }

    getProductById(find_id){
        let find_product_by_id = this.products.find((el)=> el.id == find_id)
        if(find_product_by_id){
            return find_product_by_id;
        }else{
            return "Not found."
        }
    }

}

const productManager = new ProductManager();
productManager.addProduct("Azucar", "Paquete de azucar de 100 gramos.", 15, "url", 1542, 85)
productManager.addProduct("Fideos", "Paquete de fideos de 350 gramos.", 35, "url", 1543, 75)
productManager.addProduct("Yerba", "Paquete de yerba de 150 gramos.", 10, "url", 1544, 54)
mostrarproductos = productManager.getProducts()
console.log(mostrarproductos);

encontrar_por_id = productManager.getProductById(1);
console.log(encontrar_por_id);
encontrar_por_id2 = productManager.getProductById(20);
console.log(encontrar_por_id2);