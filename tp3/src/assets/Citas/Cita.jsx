const Cita = ({ cita, eliminarCita }) => {
    return (
        <div className="cita">
            <ul>
                <li><strong>Nombre Mascota:</strong> {cita.nombreMascota}</li>
                <li><strong>Nombre Dueño:</strong> {cita.nombreDueño}</li>
                <li><strong>Fecha:</strong> {cita.fecha}</li>
                <li><strong>Hora:</strong> {cita.hora}</li>
                <li><strong>Sintomas:</strong> {cita.sintomas}</li>
            </ul>
            <button onClick={() => eliminarCita(cita.id)}>Eliminar</button>
        </div>
    )
}
export default Cita;