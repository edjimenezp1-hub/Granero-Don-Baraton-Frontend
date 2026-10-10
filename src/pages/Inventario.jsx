
import React from 'react';

// Datos de ejemplo para representar las existencias.
const inventarioInicial = [
  { id: 1, nombre: 'Arroz Diana', categoria: 'Granos', stock: 20, minimo: 10 },
  { id: 2, nombre: 'Aceite Gourmet', categoria: 'Aceites', stock: 5, minimo: 10 },
  { id: 3, nombre: 'Azúcar', categoria: 'Granos', stock: 15, minimo: 8 },
  { id: 4, nombre: 'Gaseosa', categoria: 'Bebidas', stock: 3, minimo: 10 },
];

// Pantalla de consulta de existencias.
function Inventario() {
  const totalProductos = inventarioInicial.length;

  const productosBajos = inventarioInicial.filter(
    (producto) => producto.stock <= producto.minimo
  ).length;

  return (
    <section className="inventario">
      <div className="dashboard__header">
        <h2>Control de inventario</h2>
        <p>Consulta las existencias y detecta productos con stock bajo.</p>
      </div>

      <div className="dashboard__cards">
        <article className="dashboard__card">
          <span className="dashboard__icon">📦</span>
          <h3>Productos consultados</h3>
          <p className="dashboard__value">{totalProductos}</p>
          <p className="dashboard__description">Registros de ejemplo</p>
        </article>

        <article className="dashboard__card">
          <span className="dashboard__icon">⚠️</span>
          <h3>Stock bajo</h3>
          <p className="dashboard__value">{productosBajos}</p>
          <p className="dashboard__description">Productos en nivel mínimo o inferior</p>
        </article>
      </div>

      <div className="producto-tabla__contenedor">
        <h3>Existencias de productos</h3>

        <div className="producto-tabla__scroll">
          <table className="producto-tabla">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Categoría</th>
                <th>Existencias</th>
                <th>Stock mínimo</th>
                <th>Estado</th>
              </tr>
            </thead>

            <tbody>
              {inventarioInicial.map((producto) => {
                const stockBajo = producto.stock <= producto.minimo;

                return (
                  <tr key={producto.id}>
                    <td>{producto.nombre}</td>
                    <td>{producto.categoria}</td>
                    <td>{producto.stock}</td>
                    <td>{producto.minimo}</td>
                    <td>{stockBajo ? 'Stock bajo' : 'Disponible'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Inventario;
