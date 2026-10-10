
import React, { useState } from 'react';

// Ventas de ejemplo para iniciar el módulo.
const ventasIniciales = [
  { id: 1, producto: 'Arroz Diana', cantidad: 2, precio: 3800 },
  { id: 2, producto: 'Aceite Gourmet', cantidad: 1, precio: 8500 },
];

// Formatea los valores monetarios en pesos colombianos.
function formatearPrecio(valor) {
  return valor.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  });
}

// Componente para registrar y consultar ventas.
function Ventas() {
  const [ventas, setVentas] = useState(ventasIniciales);
  const [producto, setProducto] = useState('');
  const [cantidad, setCantidad] = useState('');

  // Registra una nueva venta en la lista.
  function registrarVenta(evento) {
    evento.preventDefault();

    const cantidadNumero = Number(cantidad);

    if (!producto || !Number.isInteger(cantidadNumero) || cantidadNumero <= 0) {
      alert('Selecciona un producto e ingresa una cantidad válida.');
      return;
    }

    const precios = {
      'Arroz Diana': 3800,
      'Aceite Gourmet': 8500,
      Azúcar: 4000,
      Gaseosa: 3000,
    };

    const nuevaVenta = {
      id: Date.now(),
      producto,
      cantidad: cantidadNumero,
      precio: precios[producto],
    };

    setVentas((listaAnterior) => [...listaAnterior, nuevaVenta]);
    setProducto('');
    setCantidad('');
  }

  // Calcula el valor total de las ventas registradas.
  const totalVentas = ventas.reduce(
    (total, venta) => total + venta.cantidad * venta.precio,
    0
  );

  return (
    <section className="ventas">
      <div className="dashboard__header">
        <h2>Gestión de ventas</h2>
        <p>Registra ventas y consulta los valores de las transacciones.</p>
      </div>

      <div className="dashboard__cards">
        <article className="dashboard__card">
          <span className="dashboard__icon">🧾</span>
          <h3>Ventas registradas</h3>
          <p className="dashboard__value">{ventas.length}</p>
          <p className="dashboard__description">Transacciones de ejemplo</p>
        </article>

        <article className="dashboard__card">
          <span className="dashboard__icon">💰</span>
          <h3>Total vendido</h3>
          <p className="dashboard__value">{formatearPrecio(totalVentas)}</p>
          <p className="dashboard__description">Suma de las ventas registradas</p>
        </article>
      </div>

      <div className="producto-tabla__contenedor">
        <h3>Registrar una venta</h3>

        <form className="producto-form" onSubmit={registrarVenta}>
          <div className="producto-form__campo">
            <label htmlFor="productoVenta">Producto</label>
            <select
              id="productoVenta"
              value={producto}
              onChange={(evento) => setProducto(evento.target.value)}
              required
            >
              <option value="">Selecciona un producto</option>
              <option value="Arroz Diana">Arroz Diana</option>
              <option value="Aceite Gourmet">Aceite Gourmet</option>
              <option value="Azúcar">Azúcar</option>
              <option value="Gaseosa">Gaseosa</option>
            </select>
          </div>

          <div className="producto-form__campo">
            <label htmlFor="cantidadVenta">Cantidad</label>
            <input
              id="cantidadVenta"
              type="number"
              min="1"
              step="1"
              value={cantidad}
              onChange={(evento) => setCantidad(evento.target.value)}
              required
            />
          </div>

          <button className="producto-form__boton" type="submit">
            Registrar venta
          </button>
        </form>
      </div>

      <div className="producto-tabla__contenedor">
        <h3>Historial de ventas</h3>

        <div className="producto-tabla__scroll">
          <table className="producto-tabla">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio unitario</th>
                <th>Subtotal</th>
              </tr>
            </thead>

            <tbody>
              {ventas.map((venta) => (
                <tr key={venta.id}>
                  <td>{venta.producto}</td>
                  <td>{venta.cantidad}</td>
                  <td>{formatearPrecio(venta.precio)}</td>
                  <td>{formatearPrecio(venta.cantidad * venta.precio)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Ventas;
