import React from "react";
import DetalleCuotaInterface from "../interfaces/DetalleCuotaInterface";
import PropsInterface from "../interfaces/PropsInterface";

const CuotaTableComponent = ({ cuotas }: PropsInterface) => {

    return(
        <div>
        <h1>DETALLE DE PRESTAMO</h1>
        <table>
          <thead>
            <tr>
              <th>MES</th>
              <th>MONTO DE CUOTA</th>
              <th>INTERES</th>
              <th>CAPITAL</th>
              <th>SALDO</th>
            </tr>
          </thead>
          <tbody>
            {cuotas.map((cuota: DetalleCuotaInterface) => (
              <tr key={cuota.mes}>
                <td>{cuota.mes}</td>
                <td>{cuota.montoDeCuota}</td>
                <td>{cuota.intereses}</td>
                <td>{cuota.capital}</td>
                <td>{cuota.saldo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}   


export default CuotaTableComponent