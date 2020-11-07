import React from "react";

import { Card, CardHeader, Table, Container, Row } from "reactstrap";

// debe / haber
// {
//   partida: "",
//   valor: ""
// }

const TablaT = ({ cuenta, debe, haber }) => {
  const filas = [];
  let contDebe = 0;
  let contHaber = 0;
  let totalDebe = 0;
  let totalHaber = 0;
  while (debe[contDebe] !== undefined || haber[contHaber] !== undefined) {
    let newFila = {
      debe: null,
      haber: null,
    };
    if (debe[contDebe] !== undefined) {
      newFila.debe = debe[contDebe];
      totalDebe += debe[contDebe].valor;
    }
    if (haber[contHaber] !== undefined) {
      newFila.haber = haber[contHaber];
      totalHaber += haber[contHaber].valor;
    }
    filas.push(newFila);
    contHaber++;
    contDebe++;
  }

  const total = totalDebe - totalHaber;

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
                    <td className="center-left-td">{fila.debe.valor}</td>
                  </>
                ) : (
                  <>
                    <td />
                    <td className="center-left-td" />
                  </>
                )}
                {fila.haber ? (
                  <>
                    <td>{fila.haber.valor}</td>
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
                  <td className="center-left-td">{totalDebe}</td>
                ) : (
                  <td className="center-left-td" />
                )}
                {totalHaber > 0 ? <td>{totalHaber}</td> : <td />}
                <td />
              </tr>
            ) : (
              <></>
            )}
            <tr>
              {total >= 0 ? (
                <>
                  <td className="total-t" />
                  <td className="center-left-td total-t">{total}</td>
                  <td />
                  <td />
                </>
              ) : (
                <>
                  <td />
                  <td />
                  <td className="total-t">{-total}</td>
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
