import Cita from '../Citas/Cita';
import './Listado.css';

const Listado = ({ citas}) => {
    return (
        <div className="listado">
            {citas.map((cita) => (
                <Cita key={cita.id} cita={cita} />
            ))}
        </div>
    )
}

export default Listado;