import React from "react";

import { Card, CardHeader, Table } from "reactstrap";
import { toPisto } from "../../components/utils";

// debe / haber
// {
//   partida: "",
//   valor: ""
// }

const EstadoResultado = ({ data = [] }) => {
  return (
    <div className="table-panel estados-resultados-panel">
      <Card className="table-card">
        <CardHeader>
          <h3>Estado de resultados</h3>
        </CardHeader>
        <Table
          responsive
          className="tabla-estado-resultados container-fluid main-content"
        >
          <thead>
            <tr>
              <th className="min-column-left" />
              <th />
              <th />
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {data.map((estado) => (
              <tr>
                <td
                  className={`min-column-left ${estado.title ? "bold-td" : ""}`}
                >
                  {estado.name}
                </td>
                <td>{estado.col1 ? estado.col1 : ""}</td>
                <td>{estado.col2 ? estado.col2 : ""}</td>
                <td>{estado.col3 ? estado.col3 : ""}</td>
                <td>{estado.col4 ? estado.col4 : ""}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default EstadoResultado;
