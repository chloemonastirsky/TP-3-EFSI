const Formulario = () => {
    return (
        <div className="formulario">

            <form>
                <label htmlFor="nombreMascota">Nombre Mascota:</label>
                <input type="text" id="nombreMascota" name="nombreMascota" required />
                <label htmlFor="nombreDueño">Nombre Dueño:</label>
                <input type="text" id="nombreDueño" name="nombreDueño" required />
                <label htmlFor="fecha">Fecha:</label>
                <input type="text" id="fecha" name="fecha" required />
                <label htmlFor="hora">Hora:</label>
                <input type="text" id="hora" name="hora" required />
                <label htmlFor="sintomas">Sintomas:</label>
                <input type="text" id="sintomas" name="sintomas" required />
                <button type="submit">Agregar Cita</button>
            </form>
        </div>
    )
}

export default Formulario;