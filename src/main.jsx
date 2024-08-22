import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MeGusta from './MeGusta.jsx'
import Saludo from "./Saludo.jsx";
import HolaMundo from './HolaMundo.jsx';
import FormularioRegistro from './FormularioRegistro.jsx';
import ToDo from './ToDo.jsx';
import Reloj from './Reloj.jsx';
import Encuesta from './Encuentas.jsx';





createRoot(document.getElementById('root')).render(
  <StrictMode>

    { <ToDo />      }


    {/* <Saludo />       */}
      {/* <MeGusta />       */}

  </StrictMode>,
)
