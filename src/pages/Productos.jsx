
import React, { useState } from 'react';

// Productos iniciales de ejemplo para probar el módulo.
const productosIniciales = [
  {
    id: 1,
    nombre: 'Arroz Diana',
    categoria: 'Granos',
    precio: 3800,
    stock: 20,
  },
  {
    id: 2,
    nombre: 'Aceite Gourmet',
    categoria: 'Aceites',
    precio: 8500,
    stock: 15,
  },
];

// Formatea los precios en pesos colombianos.
function formatearPrecio(precio) {
  return precio.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  });
}

// Componente principal del módulo de productos.
function Productos() {
  const [productos, setProductos] = useState(productosIniciales);

  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');

  // Registra un producto nuevo en la lista.
  function registrarProducto(evento) {
    evento.preventDefault();

    const nombreLimpio = nombre.trim();
    const precioNumero = Number(precio);
    const stockNumero = Number(stock);

    if (
      !nombreLimpio ||
      !categoria ||
      precio === '' ||
      stock === '' ||
      !Number.isFinite(precioNumero) ||
      !Number.isInteger(stockNumero) ||
      precioNumero <= 0 ||
      stockNumero < 0
    ) {
      alert('Verifica los datos. El precio debe ser mayor que cero y el stock no puede ser negativo.');
      return;
    }

    const nuevoProducto = {
      id: Date.now(),
      nombre: nombreLimpio,
      categoria,
      precio: precioNumero,
      stock: stockNumero,
    };

    setProductos((listaAnterior) => [
      ...listaAnterior,
      nuevoProducto,
    ]);

    // Limpiamos el formulario después del registro.
    setNombre('');
    setCategoria('');
    setPrecio('');
    setStock('');
  }

  return (
    <section className="productos">
      <div className="dashboard__header">
        <h2>Gestión de productos</h2>
        <p>Registra y consulta los productos del granero.</p>
      </div>

      {/* Formulario de registro */}
      <form className="producto-form" onSubmit={registrarProducto}>
        <div className="producto-form__campo">
          <label htmlFor="nombre">Nombre del producto</label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(evento) => setNombre(evento.target.value)}
            placeholder="Ej. Azúcar"
            maxLength={80}
            required
          />
        </div>

        <div className="producto-form__campo">
          <label htmlFor="categoria">Categoría</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(evento) => setCategoria(evento.target.value)}
            required
          >
            <option value="">Selecciona una categoría</option>
            <option value="Granos">Granos</option>
            <option value="Aceites">Aceites</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Aseo">Aseo</option>
            <option value="Otros">Otros</option>
          </select>
        </div>

        <div className="producto-form__campo">
          <label htmlFor="precio">Precio (COP)</label>
          <input
            id="precio"
            type="number"
            min="1"
            step="1"
            value={precio}
            onChange={(evento) => setPrecio(evento.target.value)}
            required
          />
        </div>

        <div className="producto-form__campo">
          <label htmlFor="stock">Cantidad en stock</label>
          <input
            id="stock"
            type="number"
            min="0"
            step="1"
            value={stock}
            onChange={(evento) => setStock(evento.target.value)}
            required
          />
        </div>

        <button className="producto-form__boton" type="submit">
          Registrar producto
        </button>
      </form>

      {/* Tabla con los productos registrados */}
      <div className="producto-tabla__contenedor">
        <h3>Productos registrados ({productos.length})</h3>

        <div className="producto-tabla__scroll">
          <table className="producto-tabla">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Stock</th>
              </tr>
            </thead>

            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.nombre}</td>
                  <td>{producto.categoria}</td>
                  <td>{formatearPrecio(producto.precio)}</td>
                  <td>{producto.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {productos.length === 0 && (
          <p>No hay productos registrados.</p>
        )}
      </div>
    </section>
  );
}

export default Productos;
