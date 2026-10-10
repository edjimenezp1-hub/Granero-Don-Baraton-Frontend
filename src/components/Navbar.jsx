
import React from 'react';

// Componente que representa la barra superior del sistema.
function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <span className="navbar__icon">🛒</span>
        <h1>Granero Don Baratón</h1>
      </div>

      <div className="navbar__user">
        <span>Administrador</span>
        <span className="navbar__avatar">A</span>
      </div>
    </header>
  );
}

// Permite utilizar Navbar desde otros archivos.
export default Navbar;
