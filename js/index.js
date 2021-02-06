"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Productos_1 = require("./Productos");
/* let gatos:any[] = []

app.get('/gatos', (req, res) => {
    res.json(gatos);
})

app.post('/gatos', (req, res) => {
    const gato = req.body;
    gatos.push(gato);
    res.sendStatus(201);
})

app.get('/gatos/:id', (req, res) => {
    const id = req.params.id
    const gato = gatos.find(gato => gato.id === id);
    if(!gato) res.sendStatus(404);
    res.json(gato);
})

app.patch('/gatos/:id/raza', (req, res) => {
    const id = req.params.id
    const gato = gatos.find(gato => gato.id === id);
    if(!gato) res.sendStatus(404);
    res.json(gato);

    const {raza} = req.body;
    gato.raza = raza;
})

app.delete('/gatos/:id', (req, res) => {
    const id = req.params.id
    const gato = gatos.find(gato => gato.id === id);
    if(!gato) res.sendStatus(404);

    gatos = gatos.filter(gato => gato.id != id);
    res.json(gatos);
})

app.post('/users', (req, res) => {
    res.send({
        params: req.params,
        queryParams: req.query,
        body: req.body
    });
}) */
const PORT = '8080';
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const consolas = new Productos_1.Productos();
app.get('/api/productos', (req, res) => {
    if (consolas.getProductos().length < 1)
        res.json({ error: 'No hay productos cargados' });
    else {
        res.send(consolas.getProductos());
    }
});
app.get('/api/productos/:id', (req, res) => {
    const id = req.params.id;
    const producto = consolas.findProducto(parseInt(id));
    if (!producto)
        res.json({ error: 'Producto no encontrado' });
    else
        res.json(producto);
});
app.post('/api/productos', (req, res) => {
    const producto = req.body;
    consolas.setProductos(producto);
    res.sendStatus(201);
});
app.delete('/api/productos/:id', (req, res) => {
    const id = req.params.id;
    const producto = consolas.findProducto(parseInt(id));
    if (!producto)
        res.sendStatus(404);
    else {
        consolas.deleteProducto(parseInt(id));
        res.json({
            message: 'Producto eliminado',
            id: req.params.id
        });
    }
});
app
    .listen(PORT, () => console.log('Server listening in port ', PORT))
    .on("error", (err) => console.log(`Se ha producido el siguiente error: ${err}`));
