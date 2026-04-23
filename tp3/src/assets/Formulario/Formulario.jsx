import { useState } from "react";
import './Formulario.css';
const Formulario = () => {
    const [listaMascotas, setListaMascotas] = useState([]);
    const [nombreMascota, setNombreMascota]=useState("");
    const [nombreDueño, setNombreDueño]=useState("");
    const [fecha, setFecha]=useState("");
    const [hora, setHora]=useState("");
    const [sintomas, setSintomas]=useState("");
     
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
                <label htmlFor="nombreMascota">Nombre Mascota:</label>
                <input 
                type="text" 
                onKeyUp={(event)=> setNombreMascota(event.target.value)}
            />
                <label htmlFor="nombreDueño">Nombre Dueño:</label>
                <input 
                type="text" 
                onKeyUp={(event)=> setNombreDueño(event.target.value)}
            />
                <label htmlFor="date">Fecha:</label>
                <input 
                type="text" 
                onKeyUp={(event)=> setFecha(event.target.value)}
            />
                <label htmlFor="time">Hora:</label>
                <input 
                type="text" 
                onKeyUp={(event)=> setHora(event.target.value)}
            />

                <label htmlFor="sintomas">Sintomas:</label>
                <input 
                type="text" 
                onKeyUp={(event)=> setSintomas(event.target.value)}
            />

                <button 
                onClick={() => {
                setListaMascotas([
                    ...listaMascotas,
                    nombreMascota
                ])
                }}>Agregar Mascota</button>
            </form>
        </div>
    )
}

export default Formulario;