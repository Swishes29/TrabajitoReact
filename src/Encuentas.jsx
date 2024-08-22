import React, { useState } from 'react';

function Encuesta() {

  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');


  const opciones = [
    'Pruebita 1',
    'Pruebita 2',
    'Pruebita 3',
    'Pruebita 4'
  ];


  const manejarCambio = (event) => {
    setOpcionSeleccionada(event.target.value);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">Encuesta de Opinión</h1>

      <div className="space-y-4">
        {opciones.map((opcion) => (
          <div key={opcion} className="flex items-center">
            <input
              type="radio"
              id={opcion}
              name="opcion"
              value={opcion}
              checked={opcion === opcionSeleccionada}
              onChange={manejarCambio}
              className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor={opcion} className="ml-3 text-lg text-gray-700 cursor-pointer">{opcion}</label>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 border-t border-gray-200">
        <h2 className="text-xl font-semibold mb-2">Opción Seleccionada:</h2>
        <p className="text-lg text-gray-800">
          {opcionSeleccionada ? opcionSeleccionada : 'Ninguna opción seleccionada'}
        </p>
      </div>
    </div>
  );
}

export default Encuesta;
