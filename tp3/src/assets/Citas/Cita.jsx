import './Cita.css';

const Cita = ({ cita, listaMascotas, setListaMascotas }) => {

    return (
        <div className="cita">
            <p><strong>Nombre Mascota:</strong> {cita.nombreMascota}</p>
            <p><strong>Nombre Dueño:</strong> {cita.nombreDueño}</p>
            <p><strong>Fecha:</strong> {cita.fecha}</p>
            <p><strong>Hora:</strong> {cita.hora}</p>
            <p><strong>Sintomas:</strong> {cita.sintomas}</p>
            <button onClick={() => setListaMascotas(listaMascotas.filter(c => c.id !== cita.id))}>Eliminar</button>
        </div>
    )
}

export default Cita;