import { useState } from 'react';
import './index.css';

function MeGusta() {
  // Declaración de un estado llamado "count" con un valor inicial de 0
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const incrementar = () => {
    setCount(count + 1);
  };
  //Funcion para disminuir el contador
  const disminuir = () => {
    setCount(count - 1);
  };

  return (
    <div className="text-center mt-12">
      <h1 className="text-2xl mb-4">Me gusta 👍: {count}</h1>
      <button 
        onClick={incrementar} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
      >
        Incrementar
      </button>
      <button 
        onClick={disminuir} 
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2"
      >
        Disminuir
      </button>

    </div>
  );
}

export default MeGusta;
