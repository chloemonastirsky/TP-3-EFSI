import Cita from '../Citas/Cita';
import './Listado.css';

const Listado = ({ citas, setListaMascotas }) => {
    return (
        <div className="listado app__main">
            {citas.map((cita) => (
                <Cita 
                    key={cita.id} 
                    cita={cita} 
                    listaMascotas={citas}
                    setListaMascotas={setListaMascotas} 
                />
            ))}
        </div>
    )
}

export default Listado;