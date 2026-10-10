
import React, { useState } from 'react';
import './styles/estilos.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Productos from './pages/Productos';
import Inventario from './pages/Inventario';
import Ventas from './pages/Ventas';
import Clientes from './pages/Clientes';
import Proveedores from './pages/Proveedores';
import Reportes from './pages/Reportes';
import Configuracion from './pages/Configuracion';

// Componente principal del sistema.
function App() {
  // Guarda el nombre de la sección seleccionada.
  const [seccionActiva, setSeccionActiva] = useState('Dashboard');

  // Selecciona el contenido que se mostrará en pantalla.
  function mostrarContenido() {
    switch (seccionActiva) {
      case 'Dashboard':
        return <Dashboard />;

      case 'Productos':
        return <Productos />;

      case 'Inventario':
        return <Inventario />;  
       
      case 'Ventas':
        return <Ventas />; 
        
      case 'Clientes':
        return <Clientes />;  

      case 'Proveedores':
        return <Proveedores />; 

      case 'Reportes':
        return <Reportes />;  

      case 'Configuración':
        return <Configuracion />;

      default:
        return (
          <section className="dashboard">
            <div className="dashboard__header">
              <h2>{seccionActiva}</h2>
              <p>
                El módulo de {seccionActiva.toLowerCase()} está
                pendiente de desarrollo.
              </p>
            </div>
          </section>
        );
    }
  }

  return (
    <div className="app">
      <Navbar />

      <div className="app__body">
        <Sidebar
          seccionActiva={seccionActiva}
          cambiarSeccion={setSeccionActiva}
        />

        <main className="app__main">
          {mostrarContenido()}
        </main>
      </div>
    </div>
  );
}

export default App;
