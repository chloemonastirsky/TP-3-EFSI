const Formulario = () => {
    return (
        <div className="formulario app__main">

            <form>
                <label htmlFor="nombreMascota">Nombre Mascota:</label>
                <input type="text" id="nombreMascota" name="nombreMascota" required />
                <label htmlFor="nombreDueño">Nombre Dueño:</label>
                <input type="text" id="nombreDueño" name="nombreDueño" required />
                <label htmlFor="date">Fecha:</label>
                <input type="date" id="date" name="date" required />
                <label htmlFor="time">Hora:</label>
                <input type="time" id="time" name="time" required />
                <label htmlFor="sintomas">Sintomas:</label>
                <input type="text" id="sintomas" name="sintomas" required />
                <button type="submit">Agregar Cita</button>
            </form>
        </div>
    )
}

export default Formulario;