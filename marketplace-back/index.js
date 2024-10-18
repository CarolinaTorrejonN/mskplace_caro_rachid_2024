const express = require('express'); 
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const carritoRoutes = require('./routes/carritoRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');
const userRoutes = require('./routes/userRoutes');  // <-- Añadir esta línea

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/products', productRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/carrito', carritoRoutes);
app.use('/api/pedidos', pedidoRoutes);
app.use('/api/usuarios', userRoutes);  // <-- Añadir esta línea

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
