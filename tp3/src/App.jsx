import { useState } from 'react';
import './App.css';
import Formulario from './assets/Formulario/Formulario';
import Listado from './assets/Listado/Listado';

function App() {
  const [listaMascotas, setListaMascotas] = useState([]);

  return (
    <>
      <section id="center">
        <h2>Administrador de pacientes</h2>
      </section>
      <section id="left">
        <h2>Formulario de contacto</h2>
        <Formulario listaMascotas={listaMascotas} setListaMascotas={setListaMascotas} />
      </section>
      <section id="right">
        <h2>Listado de citas</h2>
        <Listado citas={listaMascotas} setListaMascotas={setListaMascotas} />
      </section>
    </>
  )
}

export default App;