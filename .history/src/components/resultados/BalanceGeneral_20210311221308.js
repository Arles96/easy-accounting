import React from "react";

import { Card, CardHeader, Table } from "reactstrap";
import { toPisto } from "../utils"

// debe / haber
// {
//   partida: "",
//   valor: ""
// }

const BalanceGeneral = () => {


  return (
    <div className="table-panel balance-general-panel">
      <Card className="table-card">
        <div size="md">
          <ReactHTMLTableToExcel size="md"
            id="test-table-xls-button"
            className="btn btn-info btn-md"
            table="balance-general"
            filename="balance-general"
            sheet="tablexls"
            buttonText="Exportar Excel"
          />
          <Button color="danger" size="md" onClick={() => ReactPDF.render(EstadoResultado, `output.pdf`)}>
            Exportar PDF
          </Button>
        </div>
        <CardHeader>
          <h3>Balance General</h3>
        </CardHeader>
        <Table id= 'balance-general' responsive>
          <thead>
            <tr>
              <th scope="col">
                Activo
              </th>
              <th scope="col">
                Pasivo
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default BalanceGeneral;
