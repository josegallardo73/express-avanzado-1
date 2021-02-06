"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Productos = void 0;
class Productos {
    constructor() {
        this.setId = (newProducto) => {
            newProducto.id = this.productos.length + 1;
            return newProducto;
        };
        this.getProductos = () => this.productos;
        this.setProductos = (newProducto) => {
            const producto = this.setId(newProducto);
            this.productos.push(producto);
        };
        this.deleteProducto = (id) => this.productos = this.getProductos().filter(producto => producto.id !== id);
        this.findProducto = (id) => this.getProductos().find(producto => producto.id === id);
        this.productos = [];
    }
}
exports.Productos = Productos;
