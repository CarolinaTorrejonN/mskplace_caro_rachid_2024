// src/pages/GalleryPage.js
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/GalleryPage.css';
import { ProductContext } from '../context/ProductProvider';
import { obtenerProductos } from '../services/api';

function GalleryPage() {
  const { productos: productosJSON, addCarrito } = useContext(ProductContext);
  const [productosBackend, setProductosBackend] = useState([]);
  const navigate = useNavigate();

  // Cargar productos del backend
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const productosApi = await obtenerProductos();
        // Combinamos productos del backend con los del JSON
        const productosFormateados = productosApi.map((producto) => ({
          id: producto.id,
          name: producto.titulo || producto.name, // Aseguramos el uso de 'name'
          desc: producto.descripcion || producto.desc, // Aseguramos el uso de 'desc'
          price: producto.precio || producto.price, // Aseguramos el uso de 'price'
          img: producto.img || '/images/default.jpg', // Si no hay imagen, se usa la default
        }));
        setProductosBackend(productosFormateados);
      } catch (error) {
        console.error('Error al cargar productos desde el backend:', error);
      }
    };

    cargarProductos();
  }, []);

  // Combinar productos JSON y backend
  const productosCombinados = [...productosJSON, ...productosBackend];

  return (
    <div className="gallery-container">
      <h2>Galería de Cursos</h2>
      <div className="gallery-grid">
        {productosCombinados.length > 0 ? (
          productosCombinados.map((producto) => (
            <div key={producto.id} className="card">
              <img
                src={producto.img || '/images/default.jpg'}
                alt={producto.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text">{producto.desc}</p>
                <p className="card-price">${producto.price}</p>
                <button className="btn btn-primary" onClick={() => navigate(`/detalle/${producto.id}`)}>
                  Ver más
                </button>
                <button className="btn btn-success" onClick={() => addCarrito(producto)}>
                  Agregar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
}

export default GalleryPage;
