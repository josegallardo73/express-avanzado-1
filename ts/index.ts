import express from 'express';
import { Productos } from './Productos';

const PORT = '8080'
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const consolas = new Productos();

app.get('/api/productos', (req, res) => {
    if(consolas.getProductos().length < 1) res.json({error: 'No hay productos cargados'})
    else {
        res.send(consolas.getProductos());
    }
})
app.get('/api/productos/:id', (req, res) => {
    const id = req.params.id;
    const producto = consolas.findProducto(parseInt(id));
    if(!producto) res.json({error: 'Producto no encontrado'})
    else res.json(producto);
})


app.post('/api/productos', (req, res) => {
    const producto = req.body;
    consolas.setProductos(producto);
    res.sendStatus(201);
})

app.delete('/api/productos/:id', (req, res) => {
    const id = req.params.id;
    const producto = consolas.findProducto(parseInt(id));
    if(!producto) res.sendStatus(404);
    else {
        consolas.deleteProducto(parseInt(id));
        res.json({
            message: 'Producto eliminado',
            id: req.params.id
        });
    } 
})

app
    .listen(PORT, () => console.log('Server listening in port ', PORT))
    .on("error", (err) => console.log(`Se ha producido el siguiente error: ${err}`));