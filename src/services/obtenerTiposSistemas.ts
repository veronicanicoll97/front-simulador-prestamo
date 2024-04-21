import axios from 'axios';

function obtenerTiposSistemas(
    setTipoSistema: React.Dispatch<React.SetStateAction<Array<string>>>
) {
    const recurso = 'http://localhost:8080/api/v1/prestamos/tipos-sistemas'
    axios.get(recurso).then((res) => {
        if(res.data) {
            console.log(res.data)
            const tiposDeSistema = res.data;
            console.log(tiposDeSistema);
            
            setTipoSistema(tiposDeSistema)
        }
    });
}
export default obtenerTiposSistemas