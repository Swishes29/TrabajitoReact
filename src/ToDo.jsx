import { useState } from 'react';
import './index.css';

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  // Función para agregar una tarea
  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea(''); 
    }
  };

  // Función para eliminar una tarea
  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  // Función para mover una tarea hacia arriba
  const moverTareaArriba = (index) => {
    if (index > 0) {
      const nuevasTareas = [...tareas];
      [nuevasTareas[index], nuevasTareas[index - 1]] = [nuevasTareas[index - 1], nuevasTareas[index]];
      setTareas(nuevasTareas);
    }
  };

  // Función para mover una tarea hacia abajo
  const moverTareaAbajo = (index) => {
    if (index < tareas.length - 1) {
      const nuevasTareas = [...tareas];
      [nuevasTareas[index], nuevasTareas[index + 1]] = [nuevasTareas[index + 1], nuevasTareas[index]];
      setTareas(nuevasTareas);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Lista de Tareas</h1>

      <div className="flex mb-6">
        <input 
          type="text" 
          value={nuevaTarea} 
          onChange={(e) => setNuevaTarea(e.target.value)} 
          className="flex-grow p-3 border border-gray-300 rounded mr-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Ingresa la nueva tarea"
        />
        <button 
          onClick={agregarTarea} 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Agregar
        </button>
      </div>

      <ul className="list-none space-y-2">
        {tareas.map((tarea, index) => (
          <li key={index} className="flex items-center justify-between bg-gray-100 p-3 rounded shadow-sm">
            <span className="flex-grow">{tarea}</span>
            <div className="flex space-x-2">
              <button 
                onClick={() => moverTareaArriba(index)} 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded transition duration-300 ease-in-out"
              >
                ↑
              </button>
              <button 
                onClick={() => moverTareaAbajo(index)} 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded transition duration-300 ease-in-out"
              >
                ↓
              </button>
              <button 
                onClick={() => eliminarTarea(index)} 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded transition duration-300 ease-in-out"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTareas;
