import React from "react";

import { Card, CardHeader, Table } from "reactstrap";
import { toPisto } from "../../components/utils";

// debe / haber
// {
//   partida: "",
//   valor: ""
// }

const BalanzaCombrobacion = ({ data }) => {
  const {
    arrCuentas,
    totalCreditMov,
    totalDebitMov,
    totalCreditSald,
    totalDebitSald,
  } = data;
  exportToCSV = () => {
    console.log('qp2')
    return (
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="balanza"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download as XLS"
      />
    )
  }
  return (
    <div className="table-panel balanza-comprobacion-panel">
      <Card className="table-card">
        <Button color="info" size="md" onClick={() => exportToCSV()}>
            Exportar EXCEL
          </Button>
        <CardHeader>
          <h3>Balanza de Comprobación</h3>
        </CardHeader>
        <Table id='balanza' responsive>
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
                <td>{cuenta.nameAccount}</td>
                <td className="left-border-cell">
                  {toPisto(cuenta.subtotalDebit)}
                </td>
                <td>{toPisto(cuenta.subtotalCredit)}</td>
                {cuenta.total === 0 ? (
                  <>
                    <td className="left-border-cell" />
                    <td />
                  </>
                ) : cuenta.sectionAccount === "debit" ? (
                  <>
                    <td className="left-border-cell">
                      {toPisto(cuenta.total)}
                    </td>
                    <td />
                  </>
                ) : (
                  <>
                    <td className="left-border-cell" />
                    <td>{toPisto(cuenta.total)}</td>
                  </>
                )}
              </tr>
            ))}
            <tr>
              <td className="balanza-totales-cells bold-td">TOTALES</td>
              <td className="left-border-cell balanza-totales-cells bold-td">
                {toPisto(totalDebitMov)}
              </td>
              <td className="balanza-totales-cells bold-td">
                {toPisto(totalCreditMov)}
              </td>
              <td className="left-border-cell balanza-totales-cells bold-td">
                {toPisto(totalDebitSald)}
              </td>
              <td className="balanza-totales-cells bold-td">
                {toPisto(totalCreditSald)}
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default BalanzaCombrobacion;
