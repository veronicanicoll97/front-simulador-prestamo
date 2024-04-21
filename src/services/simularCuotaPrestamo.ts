import PrestamoInterface from '@/app/interfaces/PrestamoInterface';
import axios from 'axios';

function simularCuotaPrestamo(
    solicitudPrestamo: PrestamoInterface,
) {
    const recurso = 'http://localhost:8080/api/v1/prestamos/simular-prestamo'
    axios.post(recurso, solicitudPrestamo).then((res) => {
        console.log(res.data);
    });
}
export default simularCuotaPrestamo