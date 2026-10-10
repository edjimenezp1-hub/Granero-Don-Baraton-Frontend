
import React, { useState } from 'react';

// Clientes de ejemplo para probar el módulo.
const clientesIniciales = [
  {
    id: 1,
    nombre: 'Carlos Martínez',
    documento: '1020304050',
    telefono: '3001234567',
    correo: 'carlos@example.com',
  },
  {
    id: 2,
    nombre: 'María López',
    documento: '1098765432',
    telefono: '3107654321',
    correo: 'maria@example.com',
  },
];

// Componente para registrar y consultar clientes.
function Clientes() {
  const [clientes, setClientes] = useState(clientesIniciales);
  const [nombre, setNombre] = useState('');
  const [documento, setDocumento] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');

  // Registra un cliente después de validar el formulario.
  function registrarCliente(evento) {
    evento.preventDefault();

    const nombreLimpio = nombre.trim();
    const documentoLimpio = documento.trim();
    const telefonoLimpio = telefono.trim();
    const correoLimpio = correo.trim();

    if (
      !nombreLimpio ||
      !/^\d+$/.test(documentoLimpio) ||
      !/^\d+$/.test(telefonoLimpio) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoLimpio)
    ) {
      alert(
        'Verifica los datos: el documento y teléfono deben contener números y el correo debe ser válido.'
      );
      return;
    }

    // Evita registrar dos veces el mismo documento.
    const documentoExiste = clientes.some(
      (cliente) => cliente.documento === documentoLimpio
    );

    if (documentoExiste) {
      alert('Ya existe un cliente con ese documento.');
      return;
    }

    const nuevoCliente = {
      id: Date.now(),
      nombre: nombreLimpio,
      documento: documentoLimpio,
      telefono: telefonoLimpio,
      correo: correoLimpio,
    };

    setClientes((listaAnterior) => [
      ...listaAnterior,
      nuevoCliente,
    ]);

    // Limpia los campos después del registro.
    setNombre('');
    setDocumento('');
    setTelefono('');
    setCorreo('');
  }

  return (
    <section className="clientes">
      <div className="dashboard__header">
        <h2>Gestión de clientes</h2>
        <p>Registra y consulta la información de los clientes del granero.</p>
      </div>

      <div className="dashboard__cards">
        <article className="dashboard__card">
          <span className="dashboard__icon">👥</span>
          <h3>Clientes registrados</h3>
          <p className="dashboard__value">{clientes.length}</p>
          <p className="dashboard__description">
            Total de registros en esta sesión
          </p>
        </article>
      </div>

      {/* Formulario para registrar clientes */}
      <div className="producto-tabla__contenedor">
        <h3>Registrar cliente</h3>

        <form className="producto-form" onSubmit={registrarCliente}>
          <div className="producto-form__campo">
            <label htmlFor="nombreCliente">Nombre completo</label>
            <input
              id="nombreCliente"
              type="text"
              value={nombre}
              onChange={(evento) => setNombre(evento.target.value)}
              placeholder="Ej. Juan Pérez"
              maxLength={100}
              required
            />
          </div>

          <div className="producto-form__campo">
            <label htmlFor="documentoCliente">Documento</label>
            <input
              id="documentoCliente"
              type="text"
              inputMode="numeric"
              value={documento}
              onChange={(evento) =>
                setDocumento(evento.target.value.replace(/\D/g, ''))
              }
              placeholder="Número de documento"
              maxLength={20}
              required
            />
          </div>

          <div className="producto-form__campo">
            <label htmlFor="telefonoCliente">Teléfono</label>
            <input
              id="telefonoCliente"
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
            <label htmlFor="correoCliente">Correo electrónico</label>
            <input
              id="correoCliente"
              type="email"
              value={correo}
              onChange={(evento) => setCorreo(evento.target.value)}
              placeholder="cliente@ejemplo.com"
              maxLength={120}
              required
            />
          </div>

          <button className="producto-form__boton" type="submit">
            Registrar cliente
          </button>
        </form>
      </div>

      {/* Tabla de clientes registrados */}
      <div className="producto-tabla__contenedor">
        <h3>Listado de clientes</h3>

        <div className="producto-tabla__scroll">
          <table className="producto-tabla">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Documento</th>
                <th>Teléfono</th>
                <th>Correo electrónico</th>
              </tr>
            </thead>

            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.id}>
                  <td>{cliente.nombre}</td>
                  <td>{cliente.documento}</td>
                  <td>{cliente.telefono}</td>
                  <td>{cliente.correo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {clientes.length === 0 && (
          <p>No hay clientes registrados.</p>
        )}
      </div>
    </section>
  );
}

export default Clientes;
