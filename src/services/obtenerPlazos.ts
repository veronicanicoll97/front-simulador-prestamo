import axios from 'axios';

function obtenerPlazos(
    setPlazoPrestamo: React.Dispatch<React.SetStateAction<Array<number>>>
) {
    const recurso = 'http://localhost:8080/api/v1/prestamos/plazos'
    axios.get(recurso).then((res) => {
        if(res.data) {
            setPlazoPrestamo(res.data)
        }
    });
}
export default obtenerPlazos