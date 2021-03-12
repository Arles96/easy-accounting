import React from "react";

import { Card, CardHeader, Table, Button } from "reactstrap";

import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { toPisto } from "../utils"

// debe / haber
// {
//   partida: "",
//   valor: ""
// }

const BalanceGeneral = ({ data }) => {
  

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
        </div>
        <CardHeader>
          <h3>Balance General</h3>
        </CardHeader>
        <Table id= 'balance-general' responsive>
          <thead>
            <tr>
              <th scope="col">
                Detalle
              </th>
              <th scope="col">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
           {
             data.map(({ name, title, isTotal, total }) => {
               if (title) {
                 return (
                  <tr>
                    <td>
                      <b>
                        {name}
                      </b>
                    </td>
                    <td></td>
                  </tr>
                 );
               } else if (isTotal) {
                 return (
                  <tr>
                    <td>
                      <b>
                        {name}
                      </b>
                    </td>
                    <td>
                      <b>
                        {total}
                      </b>
                    </td>
                  </tr>
                 );
               } else {
                 return (
                  <tr>
                    <td>
                      {name}
                    </td>
                    <td>
                      {total}
                    </td>
                  </tr>
                 );
               }
             })
           }
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default BalanceGeneral;
