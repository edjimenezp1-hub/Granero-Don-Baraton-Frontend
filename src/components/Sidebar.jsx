
import React from 'react';

// Opciones de navegación del sistema.
const menuItems = [
  { nombre: 'Dashboard', icono: '📊' },
  { nombre: 'Productos', icono: '📦' },
  { nombre: 'Inventario', icono: '🗃️' },
  { nombre: 'Ventas', icono: '💰' },
  { nombre: 'Clientes', icono: '👥' },
  { nombre: 'Proveedores', icono: '🚚' },
  { nombre: 'Reportes', icono: '📈' },
  { nombre: 'Configuración', icono: '⚙️' },
];

// Recibe la sección seleccionada y la función para cambiarla.
function Sidebar({ seccionActiva, cambiarSeccion }) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__title">Menú principal</h2>

      <nav aria-label="Navegación principal">
        <ul className="sidebar__list">
          {menuItems.map((item) => (
            <li key={item.nombre}>
              <button
                type="button"
                className={`sidebar__link ${
                  seccionActiva === item.nombre ? 'sidebar__link--activo' : ''
                }`}
                onClick={() => cambiarSeccion(item.nombre)}
                aria-current={
                  seccionActiva === item.nombre ? 'page' : undefined
                }
              >
                <span>{item.icono}</span>
                <span>{item.nombre}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
