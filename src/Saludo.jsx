import { useState } from 'react';

function Saludo() {
    // Declaración del estado "nombre" con un valor inicial de cadena vacía
    const [nombre, setNombre] = useState('');

    // Función que se llama cada vez que cambia el valor del input
    const manejarCambio = (evento) => {
        setNombre(evento.target.value);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>{nombre ? `¡Hola, ${nombre}!` : 'Escribe tu nombre...'}</h1>
            <input
                type="text"
                placeholder="Escribe tu nombre"
                value={nombre}
                onChange={manejarCambio}
                style={{ padding: '10px', fontSize: '16px', width: '200px' }}
            />
        </div>
    );
}

export default Saludo;