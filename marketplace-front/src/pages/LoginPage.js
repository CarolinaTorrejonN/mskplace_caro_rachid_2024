// src/pages/LoginPage.js
import React, { useState } from 'react';
import '../assets/styles/LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Resetear error
    setSuccessMessage(''); // Resetear mensaje de éxito

    if (!email || !password) {
      setError('Por favor, completa ambos campos.');
      return;
    }

    // Mostrar mensaje de éxito si ambos campos están completos
    setSuccessMessage('Acceso exitoso. ¡Bienvenido!');
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/fondo1.jpg'})`,
        backgroundSize: 'cover',     // La imagen cubre todo el contenedor
        backgroundPosition: 'center', // Centra la imagen
        backgroundRepeat: 'no-repeat', // No se repite
        minHeight: '100vh' // Asegura que ocupe todo el alto de la pantalla
      }}
    >
      <div className="login-box">
        <h1>Inicio de Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu email"
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              className="input-field"
            />
          </div>

          {/* Mensaje de error */}
          {error && <p className="error-message">{error}</p>}

          {/* Mensaje de éxito */}
          {successMessage && <p className="success-message">{successMessage}</p>}

          <button type="submit" className="login-button">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
