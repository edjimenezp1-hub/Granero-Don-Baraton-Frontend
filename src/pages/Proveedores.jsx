
import React, { useState } from 'react';

// Proveedores de ejemplo para probar el módulo.
const proveedoresIniciales = [
  {
    id: 1,
    nombre: 'Distribuciones del Cauca',
    nit: '900123456',
    telefono: '6028234567',
    correo: 'ventas@distribucionescauca.com',
    producto: 'Granos',
  },
  {
    id: 2,
    nombre: 'Comercializadora La Economía',
    nit: '901234567',
    telefono: '3004567890',
    correo: 'pedidos@laeconomia.com',
    producto: 'Abarrotes',
  },
];

// Componente para registrar y consultar proveedores.
function Proveedores() {
  const [proveedores, setProveedores] = useState(proveedoresIniciales);
  const [nombre, setNombre] = useState('');
  const [nit, setNit] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [producto, setProducto] = useState('');

  // Registra un proveedor después de validar los campos.
  function registrarProveedor(evento) {
    evento.preventDefault();

    const nombreLimpio = nombre.trim();
    const nitLimpio = nit.trim();
    const telefonoLimpio = telefono.trim();
    const correoLimpio = correo.trim();

    if (
      !nombreLimpio ||
      !/^\d+$/.test(nitLimpio) ||
      !/^\d+$/.test(telefonoLimpio) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoLimpio) ||
      !producto
    ) {
      alert(
        'Verifica los datos: el NIT y el teléfono deben contener números, y el correo debe ser válido.'
      );
      return;
    }

    // Evita duplicar proveedores con el mismo NIT.
    const nitExiste = proveedores.some(
      (proveedor) => proveedor.nit === nitLimpio
    );

    if (nitExiste) {
      alert('Ya existe un proveedor registrado con ese NIT.');
      return;
    }

    const nuevoProveedor = {
      id: Date.now(),
      nombre: nombreLimpio,
      nit: nitLimpio,
      telefono: telefonoLimpio,
      correo: correoLimpio,
      producto,
    };

    setProveedores((listaAnterior) => [
      ...listaAnterior,
      nuevoProveedor,
    ]);

    // Limpia el formulario después del registro.
    setNombre('');
    setNit('');
    setTelefono('');
    setCorreo('');
    setProducto('');
  }

  return (
    <section className="proveedores">
      <div className="dashboard__header">
        <h2>Gestión de proveedores</h2>
        <p>Registra y consulta las empresas que suministran productos al granero.</p>
      </div>

      <div className="dashboard__cards">
        <article className="dashboard__card">
          <span className="dashboard__icon">🚚</span>
          <h3>Proveedores registrados</h3>
          <p className="dashboard__value">{proveedores.length}</p>
          <p className="dashboard__description">
            Total de registros en esta sesión
          </p>
        </article>
      </div>

      {/* Formulario para registrar proveedores */}
      <div className="producto-tabla__contenedor">
        <h3>Registrar proveedor</h3>

        <form className="producto-form" onSubmit={registrarProveedor}>
          <div className="producto-form__campo">
            <label htmlFor="nombreProveedor">Nombre o razón social</label>
            <input
              id="nombreProveedor"
              type="text"
              value={nombre}
              onChange={(evento) => setNombre(evento.target.value)}
              placeholder="Ej. Distribuciones del Cauca"
              maxLength={120}
              required
            />
          </div>

          <div className="producto-form__campo">
            <label htmlFor="nitProveedor">NIT sin puntos ni guion</label>
            <input
              id="nitProveedor"
              type="text"
              inputMode="numeric"
              value={nit}
              onChange={(evento) =>
                setNit(evento.target.value.replace(/\D/g, ''))
              }
              placeholder="Ej. 900123456"
              maxLength={20}
              required
            />
          </div>

          <div className="producto-form__campo">
            <label htmlFor="telefonoProveedor">Teléfono</label>
            <input
              id="telefonoProveedor"
              type="tel"
              inputMode="numeric"
              value={telefono}
              onChange={(evento) =>
                setTelefono(evento.target.value.replace(/\D/g, ''))
              }
              placeholder="Número de contacto"
              maxLength={15}
              required
            />
          </div>

          <div className="producto-form__campo">
            <label htmlFor="correoProveedor">Correo electrónico</label>
            <input
              id="correoProveedor"
              type="email"
              value={correo}
              onChange={(evento) => setCorreo(evento.target.value)}
              placeholder="proveedor@ejemplo.com"
              maxLength={120}
              required
            />
          </div>

          <div className="producto-form__campo">
            <label htmlFor="productoProveedor">Tipo de productos</label>
            <select
              id="productoProveedor"
              value={producto}
              onChange={(evento) => setProducto(evento.target.value)}
              required
            >
              <option value="">Selecciona una categoría</option>
              <option value="Granos">Granos</option>
              <option value="Aceites">Aceites</option>
              <option value="Bebidas">Bebidas</option>
              <option value="Aseo">Aseo</option>
              <option value="Abarrotes">Abarrotes</option>
              <option value="Otros">Otros</option>
            </select>
          </div>

          <button className="producto-form__boton" type="submit">
            Registrar proveedor
          </button>
        </form>
      </div>

      {/* Tabla de proveedores registrados */}
      <div className="producto-tabla__contenedor">
        <h3>Listado de proveedores</h3>

        <div className="producto-tabla__scroll">
          <table className="producto-tabla">
            <thead>
              <tr>
                <th>Nombre o razón social</th>
                <th>NIT</th>
                <th>Teléfono</th>
                <th>Correo</th>
                <th>Productos suministrados</th>
              </tr>
            </thead>

            <tbody>
              {proveedores.map((proveedor) => (
                <tr key={proveedor.id}>
                  <td>{proveedor.nombre}</td>
                  <td>{proveedor.nit}</td>
                  <td>{proveedor.telefono}</td>
                  <td>{proveedor.correo}</td>
                  <td>{proveedor.producto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {proveedores.length === 0 && (
          <p>No hay proveedores registrados.</p>
        )}
      </div>
    </section>
  );
}

export default Proveedores;
