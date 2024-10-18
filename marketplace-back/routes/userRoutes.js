// src/routes/userRoutes.js
const express = require('express');
const { loginUsuario, registrarUsuario } = require('../controllers/userController');
const { verificarToken } = require('../middlewares/authMiddleware');  // Ajustar correctamente la función

const router = express.Router();

// Rutas de autenticación
router.post('/login', loginUsuario);  // Ruta de login
router.post('/registro', registrarUsuario);  // Ruta de registro

// Ruta protegida para verificar el token
router.get('/perfil', verificarToken, (req, res) => {  // Asegúrate de usar "verificarToken" correctamente
  res.json({ mensaje: 'Token válido', usuario: req.usuario });
});

module.exports = router;
