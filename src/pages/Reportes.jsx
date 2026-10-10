
import React from 'react';

// Datos de ejemplo para presentar el resumen del negocio.
const datosReporte = [
  {
    id: 1,
    titulo: 'Productos registrados',
    valor: 150,
    icono: '📦',
    descripcion: 'Productos en el inventario',
  },
  {
    id: 2,
    titulo: 'Ventas del día',
    valor: 24,
    icono: '🧾',
    descripcion: 'Transacciones de ejemplo',
  },
  {
    id: 3,
    titulo: 'Productos con stock bajo',
    valor: 8,
    icono: '⚠️',
    descripcion: 'Requieren revisión',
  },
  {
    id: 4,
    titulo: 'Proveedores registrados',
    valor: 12,
    icono: '🚚',
    descripcion: 'Proveedores de ejemplo',
  },
];

// Componente para consultar reportes generales.
function Reportes() {
  return (
    <section className="reportes">
      <div className="dashboard__header">
        <h2>Reportes del negocio</h2>
        <p>
          Consulta un resumen de los indicadores principales de
          Granero Don Baratón.
        </p>
      </div>

      {/* Tarjetas con indicadores del negocio */}
      <div className="dashboard__cards">
        {datosReporte.map((dato) => (
          <article className="dashboard__card" key={dato.id}>
            <span className="dashboard__icon" aria-hidden="true">
              {dato.icono}
            </span>

            <h3>{dato.titulo}</h3>

            <p className="dashboard__value">
              {dato.valor.toLocaleString('es-CO')}
            </p>

            <p className="dashboard__description">
              {dato.descripcion}
            </p>
          </article>
        ))}
      </div>

      {/* Resumen informativo */}
      <div className="producto-tabla__contenedor">
        <h3>Resumen general</h3>

        <p>
          Este módulo presenta indicadores que ayudan a revisar
          el estado general del negocio y a identificar aspectos
          que necesitan atención.
        </p>

        <p>
          Los valores mostrados son datos de demostración y deberán
          conectarse con la base de datos para obtener resultados reales.
        </p>
      </div>
    </section>
  );
}

export default Reportes;
