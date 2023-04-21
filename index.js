class ProductManager {

    constructor(){
        this.products = []
    }

    getProducts(){
        console.log(this.products)
    }

        getId(){
        return this.products.length + 1;
    }

    addProduct(title, descrition, price, thumbnail, code,  stock){
        let product = {
            id: this.getId(),
            title,
            descrition,
            price,
            thumbnail,
            code,
            stock
        }

        if (this.products.find(product => product.code === code)) {
            console.log( "This product already exists");
        } else {
            this.products.push(product)
        }
        
    }

    getProductById = (id) => {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            console.log("Product not Found");
        } else{
            return console.log(product)
        }
        
    }

}

const verduleria = new ProductManager

verduleria.addProduct("pera","lalala", 123, "NoImage", 1234, 45)
verduleria.addProduct("banana", "lalala", 123, "NoIMage", 1234, 55)
verduleria.getProducts()
