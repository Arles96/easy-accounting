import React from "react";

import { Card, CardHeader, Table } from "reactstrap";
import { toPisto } from "../../components/utils";

// debe / haber
// {
//   partida: "",
//   valor: ""j
// }

const TablaT = ({ datosTabla }) => {
  const {
    nameAccount,
    code,
    rows,
    subtotalDebit,
    subtotalCredit,
    sectionAccount,
    total,
  } = datosTabla;

  return (
    <div className="table-panel">
      <Card className="table-card">
        <CardHeader>
          <h3>{`${nameAccount} #${code}`}</h3>
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
            {rows.map((fila, index) => (
              <tr key={"fila" + index + " " + nameAccount}>
                {fila.debit ? (
                  <>
                    <td>{`part# ${fila.debit.numberItem}`}</td>
                    <td className="center-left-td">
                      {toPisto(fila.debit.money)}
                    </td>
                  </>
                ) : (
                  <>
                    <td />
                    <td className="center-left-td" />
                  </>
                )}
                {fila.credit ? (
                  <>
                    <td>{toPisto(fila.credit.money)}</td>
                    <td>{`part# ${fila.credit.numberItem}`}</td>
                  </>
                ) : (
                  <>
                    <td />
                    <td />
                  </>
                )}
              </tr>
            ))}
            {rows.length > 1 ? (
              <tr className="bottom-t">
                <td />
                {subtotalDebit > 0 ? (
                  <td className="center-left-td">{toPisto(subtotalDebit)}</td>
                ) : (
                  <td className="center-left-td" />
                )}
                {subtotalCredit > 0 ? (
                  <td>{toPisto(subtotalCredit)}</td>
                ) : (
                  <td />
                )}
                <td />
              </tr>
            ) : (
              <></>
            )}
            <tr>
              {sectionAccount === "debit" ? (
                <>
                  <td className="total-t" />
                  <td className="center-left-td total-t">{`Saldos: ${toPisto(
                    total
                  )}`}</td>
                  <td />
                  <td />
                </>
              ) : (
                <>
                  <td />
                  <td />
                  <td className="total-t">{`Saldos: ${toPisto(total)}`}</td>
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
