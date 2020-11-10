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
        <CardHeader>
          <h3>Balance General</h3>
        </CardHeader>
        <Table responsive>
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
