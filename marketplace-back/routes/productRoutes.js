const express = require('express');
const pool = require('../config/db');  // Conexión a la base de datos
const router = express.Router();

// Endpoint para obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM publicaciones');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    res.status(500).json({ mensaje: 'Error al obtener los productos' });
  }
});

// Endpoint para agregar un nuevo producto
router.post('/', async (req, res) => {
  const { titulo, descripcion, precio, categoria_id, usuario_id } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO publicaciones (titulo, descripcion, precio, categoria_id, usuario_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [titulo, descripcion, precio, categoria_id, usuario_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error al crear el producto:', error);
    res.status(500).json({ mensaje: 'Error al crear el producto' });
  }
});

module.exports = router;
