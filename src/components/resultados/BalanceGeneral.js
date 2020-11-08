import React from "react";

import { Card, CardHeader, Table } from "reactstrap";
import { toPisto } from "../../components/utils"

// debe / haber
// {
//   partida: "",
//   valor: ""
// }

const BalanceGeneral = ({ arrCuentas }) => {
  const totales = arrCuentas.reduce(
    (totales, cuenta) => {
      let tots = totales;
      console.log(totales);
      tots.movimientos.debe += cuenta.totalDebe;
      tots.movimientos.haber += cuenta.totalHaber;
      if (cuenta.total >= 0) tots.saldos.debe += cuenta.total;
      else tots.saldos.haber -= cuenta.total;
      return tots;
    },
    {
      movimientos: {
        debe: 0,
        haber: 0,
      },
      saldos: {
        debe: 0,
        haber: 0,
      },
    }
  );

  return (
    <div className="table-panel balance-general-panel">
      <Card className="table-card">
        <CardHeader>
          <h3>Balance General</h3>
        </CardHeader>
        <Table responsive className="tabla-t">
          <thead>
            <tr>
              <th scope="col" rowSpan="2" className="multiple-row-cell-center">
                Cuenta
              </th>
              <th scope="col" colspan="2" className="left-border-cell">
                Movimientos
              </th>
              <th scope="col" colspan="2" className="left-border-cell">
                Saldos
              </th>
            </tr>
            <tr>
              <th scope="col" className="left-border-cell">
                Debe
              </th>
              <th scope="col">Haber</th>
              <th scope="col" className="left-border-cell">
                Debe
              </th>
              <th scope="col">Haber</th>
            </tr>
          </thead>
          <tbody>
            {arrCuentas.map((cuenta, index) => (
              <tr key={"filaBalance" + index + " " + cuenta.cuenta}>
                <td>{cuenta.cuenta}</td>
                <td className="left-border-cell">{toPisto(cuenta.totalDebe)}</td>
                <td>{toPisto(cuenta.totalHaber)}</td>
                {cuenta.total > 0 ? (
                  <>
                    <td className="left-border-cell">{toPisto(cuenta.total)}</td>
                    <td />
                  </>
                ) : cuenta.total < 0 ? (
                  <>
                    <td className="left-border-cell" />
                    <td>{toPisto(-cuenta.total)}</td>
                  </>
                ) : (
                  <>
                    <td className="left-border-cell" />
                    <td />
                  </>
                )}
              </tr>
            ))}
            <tr>
              <td className="balance-totales-cells" >TOTALES</td>
              <td className="left-border-cell balance-totales-cells">{toPisto(totales.movimientos.debe)}</td>
              <td className="balance-totales-cells" >{toPisto(totales.movimientos.haber)}</td>
              <td className="left-border-cell balance-totales-cells">{toPisto(totales.saldos.debe)}</td>
              <td className="balance-totales-cells" >{toPisto(totales.saldos.haber)}</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default BalanceGeneral;
