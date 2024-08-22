import React, { useState } from 'react';

function Formulario() {
  // Estados para almacenar el nombre y el correo electrónico
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');

  // Funciones para manejar el cambio en los campos de entrada
  const handleNombreChange = (e) => setNombre(e.target.value);
  const handleCorreoChange = (e) => setCorreo(e.target.value);

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Formulario de Registro</h2>
      <form className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={handleNombreChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={handleCorreoChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Ingresa tu correo electrónico"
          />
        </div>
      </form>
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md w-full max-w-sm">
        <h3 className="text-lg font-semibold mb-2">Datos ingresados:</h3>
        <p><strong>Nombre:</strong> {nombre}</p>
        <p><strong>Correo Electrónico:</strong> {correo}</p>
      </div>
    </div>
  );
}

export default Formulario;