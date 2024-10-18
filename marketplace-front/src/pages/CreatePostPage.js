// src/pages/CreatePostPage.js
import React from 'react';
import '../assets/styles/CreatePostPage.css'; // Importación correcta del archivo CSS

function CreatePostPage() {
  return (
    <div className="create-post-container">
      {/* Main content */}
      <div className="main-content">
        {/* Sidebar izquierda - Perfil del docente */}
        <aside className="sidebar-left">
          <div className="profile-section">
            <div className="profile-icon"></div> {/* Círculo que simula foto de perfil */}
            <h5>Perfil del docente</h5>
          </div>
          <div className="course-info">
            <h3>Curso en Venta</h3>
            <button className="add-photos-button">Agregar Fotos (Carrusel)</button>
            <label>Título del curso:</label>
            <input type="text" />
            <label>Precio:</label>
            <input type="text" />
            <label>Modalidad:</label>
            <input type="text" />
            <label>Descripción:</label>
            <textarea rows="3" />
            <label>Número de sesiones:</label>
            <input type="text" />
            <label>Duración de la clase:</label>
            <input type="text" />
            
            {/* Botón para guardar la información */}
            <button className="save-info-button">Guardar información</button>
          </div>
        </aside>

        {/* Recuadro de vista previa de la publicación y la información del docente */}
        <section className="preview-and-info-section">
          <div className="preview-left">
            <h3>Vista previa de la publicación</h3>
          </div>
          <div className="teacher-info-right">
            <h3>Información del Docente</h3>
            <label>Título:</label>
            <input type="text" />
            <label>Precio:</label>
            <input type="text" />
            <label>Modalidad:</label>
            <input type="text" />
            <label>Descripción:</label>
            <textarea rows="3" />
            <label>Número de sesiones:</label>
            <input type="text" />
            <label>Duración de la clase:</label>
            <input type="text" />
          </div>
        </section>
      </div>

      {/* Línea imaginaria */}
      <div className="line-separator"></div>

    </div>
  );
}

export default CreatePostPage;
