import { useState } from "react";
import './Formulario.css';

const Formulario = ({ listaMascotas, setListaMascotas }) => {
    const [nombreMascota, setNombreMascota] = useState("");
    const [nombreDueño, setNombreDueño] = useState("");
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [sintomas, setSintomas] = useState("");

    const formularioSubmit = (e) => {
        e.preventDefault();
        const nuevaMascota = {
            id: Date.now(),
            nombreMascota,
            nombreDueño,
            fecha,
            hora,
            sintomas
        };
        setListaMascotas([...listaMascotas, nuevaMascota]);
        setNombreMascota("");
        setNombreDueño("");
        setFecha("");
        setHora("");
        setSintomas("");
    };

    return (
        <div className="formulario app__main">
            <form onSubmit={formularioSubmit}>
                <label>Nombre Mascota:</label>
                <input type="text" value={nombreMascota} onChange={(e) => setNombreMascota(e.target.value)} />
                <label>Nombre Dueño:</label>
                <input type="text" value={nombreDueño} onChange={(e) => setNombreDueño(e.target.value)} />
                <label>Fecha:</label>
                <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                <label>Hora:</label>
                <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
                <label>Sintomas:</label>
                <input type="text" value={sintomas} onChange={(e) => setSintomas(e.target.value)} />
                <button type="submit">Agregar Cita</button>
            </form>
        </div>
    )
}

export default Formulario;