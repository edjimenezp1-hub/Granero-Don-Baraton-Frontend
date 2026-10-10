
import React, { useState } from 'react';

// Datos iniciales de configuración del negocio.
const configuracionInicial = {
  nombre: 'Granero Don Baratón',
  responsable: 'Administrador',
  telefono: '',
  correo: '',
  direccion: '',
};

// Componente para administrar la configuración general.
function Configuracion() {
  const [configuracion, setConfiguracion] = useState(configuracionInicial);
  const [mensaje, setMensaje] = useState('');

  // Actualiza el campo que cambia el usuario.
  function actualizarCampo(evento) {
    const { name, value } = evento.target;

    setConfiguracion((anterior) => ({
      ...anterior,
      [name]: value,
    }));

    setMensaje('');
  }

  // Valida y confirma los datos del formulario.
  function guardarConfiguracion(evento) {
    evento.preventDefault();

    setMensaje('Configuración actualizada en esta sesión.');
  }

  return (
    <section className="configuracion">
      <div className="dashboard__header">
        <h2>Configuración del sistema</h2>
        <p>Administra la información general del negocio.</p>
      </div>

      <div className="producto-tabla__contenedor">
        <h3>Información del negocio</h3>

        <form
          className="producto-form"
          onSubmit={guardarConfiguracion}
        >
          <div className="producto-form__campo">
            <label htmlFor="nombreNegocio">Nombre del negocio</label>
            <input
              id="nombreNegocio"
              name="nombre"
              type="text"
              value={configuracion.nombre}
              onChange={actualizarCampo}
              maxLength={100}
              required
            />
          </div>

          <div className="producto-form__campo">
            <label htmlFor="responsableNegocio">Responsable</label>
            <input
              id="responsableNegocio"
              name="responsable"
              type="text"
              value={configuracion.responsable}
              onChange={actualizarCampo}
              maxLength={100}
              required
            />
          </div>

          <div className="producto-form__campo">
            <label htmlFor="telefonoNegocio">Teléfono</label>
            <input
              id="telefonoNegocio"
              name="telefono"
              type="tel"
              inputMode="numeric"
              value={configuracion.telefono}
              onChange={actualizarCampo}
              maxLength={15}
              placeholder="Teléfono de contacto"
            />
          </div>

          <div className="producto-form__campo">
            <label htmlFor="correoNegocio">Correo electrónico</label>
            <input
              id="correoNegocio"
              name="correo"
              type="email"
              value={configuracion.correo}
              onChange={actualizarCampo}
              maxLength={120}
              placeholder="negocio@ejemplo.com"
            />
          </div>

          <div className="producto-form__campo">
            <label htmlFor="direccionNegocio">Dirección</label>
            <input
              id="direccionNegocio"
              name="direccion"
              type="text"
              value={configuracion.direccion}
              onChange={actualizarCampo}
              maxLength={150}
              placeholder="Dirección del negocio"
            />
          </div>

          <button className="producto-form__boton" type="submit">
            Guardar configuración
          </button>
        </form>

        {mensaje && (
          <p role="status" aria-live="polite">
            {mensaje}
          </p>
        )}
      </div>
    </section>
  );
}

export default Configuracion;
