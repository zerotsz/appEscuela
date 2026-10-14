// 1. Importamos useState
import { useState } from 'react';

// Observa que entra 'estadoInicial' como Prop para mantener el estado inicial
const AlumnoCard = ({ nombre, carrera, estadoInicial }) => {

    // 2. Creamos el estado tomando el valor inicial que viene de las Props
    const [estado, setEstado] = useState(estadoInicial);

    // 3. Lógica dinámica para el color del badge según el estado
    const badgeColor = estado === 'Matriculado' ? 'bg-success' : 'bg-secondary';

    // 4. Función para alternar dinámicamente entre Matriculado e Inactivo
    const cambiarEstado = () => {
        if (estado === 'Matriculado') {
            setEstado('Inactivo');
        } else {
            setEstado('Matriculado');
        }
    };

    return (
        <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
                <div className="card-body">
                    <h5 className="card-title text-primary">{nombre}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{carrera}</h6>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center">
                        {/* El badge muestra el estado dinámico */}
                        <span className={`badge ${badgeColor}`}>{estado}</span>

                        <div>
                            {/* Botón para cambiar estado al hacer clic */}
                            <button 
                                className="btn btn-sm btn-outline-info me-2"
                                onClick={cambiarEstado}
                            >
                                Cambiar Estado
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlumnoCard;