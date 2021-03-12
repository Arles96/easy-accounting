import React from "react";

import { Card, CardHeader, Table } from "reactstrap";
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
        <CardHeader>
          <h3>Balance General</h3>
        </CardHeader>
        <Table responsive>
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
