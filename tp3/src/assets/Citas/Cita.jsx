import { useState } from 'react';
import './Cita.css';
import Formulario from '../Formulario/Formulario';

const Cita = ({ cita, listaMascotas, setListaMascotas}) => {
    
    return (
        <div className="cita">
            {listaMascotas.map(mascota => (
                <li >
                    <strong>Nombre Mascota:</strong> {mascota.nombreMascota}<br />
                    <strong>Nombre Dueño:</strong> {mascota.nombreDueño}<br />
                    <strong>Fecha:</strong> {mascota.fecha}<br />
                    <strong>Hora:</strong> {mascota.hora}<br />
                    <strong>Sintomas:</strong> {mascota.sintomas}
                </li>
            ))}
        </div>
    )
}
export default Cita;