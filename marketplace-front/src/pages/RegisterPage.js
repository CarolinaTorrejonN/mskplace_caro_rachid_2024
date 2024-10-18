// src/pages/RegisterPage.js
import React from 'react';
import '../assets/styles/RegisterPage.css';  // Importa los estilos
import Registro from '../components/componentsRegisterPage/Registro';  // Importa el componente Registro

const RegisterPage = () => {
  return (
    <div
      className="contenedor"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/fondo2.jpg'})`,
        backgroundSize: 'cover',       // La imagen cubre todo el contenedor
        backgroundPosition: 'center',  // Centra la imagen
        backgroundRepeat: 'no-repeat', // No se repite
        minHeight: '100vh' // Asegura que ocupe todo el alto de la pantalla
      }}
    >
      <Registro /> {/* Llamada al componente que gestiona el registro */}
    </div>
  );
};

export default RegisterPage;
