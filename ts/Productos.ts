interface Producto  {
    title: string;
    price: number;
    thubnail: string;
    id: number;
}

export class Productos {
    
    productos:any[];

    constructor() {
        this.productos = [];
    }
    setId = (newProducto:Producto) => {
        newProducto.id = this.productos.length + 1;
        return newProducto;
    }
    getProductos = () => this.productos;

    setProductos = (newProducto:Producto) => {
        const producto = this.setId(newProducto)
        this.productos.push(producto);
    }

    deleteProducto = (id:number) => this.productos = this.getProductos().filter(producto => producto.id !== id);  

    findProducto = (id:number):Producto => this.getProductos().find(producto => producto.id === id)
}