
import React from 'react';

// Datos de ejemplo para mostrar el resumen del negocio.
const resumen = [
  {
    titulo: 'Total de productos',
    valor: '150',
    icono: '📦',
    descripcion: 'Productos registrados',
  },
  {
    titulo: 'Ventas del día',
    valor: '$850.000',
    icono: '💰',
    descripcion: 'Total vendido hoy',
  },
  {
    titulo: 'Stock bajo',
    valor: '8',
    icono: '⚠️',
    descripcion: 'Productos por revisar',
  },
  {
    titulo: 'Ventas realizadas',
    valor: '24',
    icono: '🧾',
    descripcion: 'Transacciones del día',
  },
];

// Pantalla principal con indicadores del negocio.
function Dashboard() {
  return (
    <section className="dashboard">
      <div className="dashboard__header">
        <h2>Panel principal</h2>
        <p>Bienvenido al sistema de gestión de inventario.</p>
      </div>

      <div className="dashboard__cards">
        {resumen.map((dato) => (
          <article className="dashboard__card" key={dato.titulo}>
            <span className="dashboard__icon" aria-hidden="true">
              {dato.icono}
            </span>

            <h3>{dato.titulo}</h3>
            <p className="dashboard__value">{dato.valor}</p>
            <p className="dashboard__description">
              {dato.descripcion}
            </p>
          </article>
        ))}
      </div>

      <div className="dashboard__welcome">
        <h3>Granero Don Baratón</h3>
        <p>
          Administra tus productos, controla el inventario
          y consulta las ventas de tu negocio desde un solo lugar.
        </p>
      </div>
    </section>
  );
}

export default Dashboard;
