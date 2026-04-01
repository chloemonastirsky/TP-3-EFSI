import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Formulario from './assets/Formulario/Formulario';
import Listado from './assets/Listado/Listado';

function App() {
  const [count, setCount] = useState(0)
  const citas = [
    {
      id: 1,
      nombreMascota: 'Firulais',
      nombreDueño: 'Juan Perez',
      fecha: '2023-06-01',
      hora: '10:00',
      sintomas: 'Fiebre y tos'
    },
    {
      id: 2,
      nombreMascota: 'Michi',
      nombreDueño: 'Maria Gomez',
      fecha: '2023-06-02',
      hora: '14:00',
      sintomas: 'Vómitos y diarrea'
    }
  ];
  return (
    <>
      <section id="center">
        <h2>Administrador de pacientes</h2>
      </section>
    <section id="left">
        <h2>Formulario de contacto</h2>
        <Formulario />
    </section>
    <section id="right">
        <h2>Listado de citas</h2>
        <Listado citas = {citas} />
      </section>
      
      <section id="spacer"></section>
    </>
  )
}

export default App
