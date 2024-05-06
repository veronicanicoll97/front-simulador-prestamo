import DetalleCuotaInterface from '@/app/interfaces/DetalleCuotaInterface';
import PrestamoInterface from '@/app/interfaces/PrestamoInterface';
import axios from 'axios';

function simularCuotaPrestamo(
    solicitudPrestamo: PrestamoInterface,
    setDetalleCuotas: React.Dispatch<React.SetStateAction<Array<DetalleCuotaInterface>>>,
) {
    const recurso = 'http://localhost:8080/api/v1/prestamos/simular-prestamo'
    axios.post(recurso, solicitudPrestamo).then((res) => {
        if(res.data) {
            setDetalleCuotas(res.data)
        }
    });
}
export default simularCuotaPrestamo