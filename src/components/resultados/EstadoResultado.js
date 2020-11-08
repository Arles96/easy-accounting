import React from "react";

import { Card, CardHeader, Table } from "reactstrap";
import { toPisto } from "../../components/utils"

// debe / haber
// {
//   partida: "",
//   valor: ""
// }

const EstadoResultado = () => {
  

  return (
    <div className="table-panel balance-general-panel">
      <Card className="table-card">
        <CardHeader>
          <h3>Estado de resultados</h3>
        </CardHeader>
        <Table responsive className="tabla-estado-resultados container-fluid main-content">
          <thead>
            <tr>
              <th />
              <th />
              <th />
              <th />
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default EstadoResultado;
