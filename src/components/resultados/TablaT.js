import React from "react";

import { Card, CardHeader, Table } from "reactstrap";
import { toPisto } from "../../components/utils";

// debe / haber
// {
//   partida: "",
//   valor: ""
// }

const TablaT = ({datosTabla}) => {
  const { cuenta, filas, totalDebe, totalHaber, total } = datosTabla;

  return (
    <div className="table-panel">
      <Card className="table-card">
        <CardHeader>
          <h3>{cuenta}</h3>
        </CardHeader>
        <Table responsive className="tabla-t">
          <thead>
            <tr>
              <th scope="col" />
              <th scope="col">Débito</th>
              <th scope="col">Crédito</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {filas.map((fila, index) => (
              <tr key={"fila" + index + " " + cuenta}>
                {fila.debe ? (
                  <>
                    <td>{fila.debe.partida}</td>
                    <td className="center-left-td">{toPisto(fila.debe.valor)}</td>
                  </>
                ) : (
                  <>
                    <td />
                    <td className="center-left-td" />
                  </>
                )}
                {fila.haber ? (
                  <>
                    <td>{toPisto(fila.haber.valor)}</td>
                    <td>{fila.haber.partida}</td>
                  </>
                ) : (
                  <>
                    <td />
                    <td />
                  </>
                )}
              </tr>
            ))}
            {filas.length > 1 ? (
              <tr className="bottom-t">
                <td />
                {totalDebe > 0 ? (
                  <td className="center-left-td">{toPisto(totalDebe)}</td>
                ) : (
                  <td className="center-left-td" />
                )}
                {totalHaber > 0 ? <td>{toPisto(totalHaber)}</td> : <td />}
                <td />
              </tr>
            ) : (
              <></>
            )}
            <tr>
              {total >= 0 ? (
                <>
                  <td className="total-t" />
                  <td className="center-left-td total-t">{toPisto(total)}</td>
                  <td />
                  <td />
                </>
              ) : (
                <>
                  <td />
                  <td />
                  <td className="total-t">{toPisto(-total)}</td>
                  <td className="total-t" />
                </>
              )}
            </tr>
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default TablaT;
