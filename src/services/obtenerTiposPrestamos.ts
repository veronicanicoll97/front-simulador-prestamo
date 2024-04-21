import axios from 'axios';
import React from 'react';

function obtenerTiposPrestamos(
    setTipoPrestamo: React.Dispatch<React.SetStateAction<any>>
) {
    const recurso = 'http://localhost:8080/api/v1/prestamos/tipos-prestamos'
    axios.get(recurso).then((res) => {
        if(res.data) {
            console.log(res.data)
            setTipoPrestamo(res.data);
        }
    });
}
export default obtenerTiposPrestamos