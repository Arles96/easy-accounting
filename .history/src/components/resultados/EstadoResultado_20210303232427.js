import React from "react";

import { Card, CardHeader, Table } from "reactstrap";
import { toPisto } from "../../components/utils";
import ReactHTMLTableToExcel from "react-html-table-to-excel";


const EstadoResultado = ({ data = [] }) => {
  return (
    <div className="table-panel estados-resultados-panel">
      <Card className="table-card">
      <ReactHTMLTableToExcel
      id="test-table-xls-button"
      className="download-table-xls-button"
      table="estado-resultado"
      filename="tablexls"
      sheet="tablexls"
      buttonText="Download as XLS"
    />
        <CardHeader>
          <h3>Estado de resultados</h3>
        </CardHeader>
        <Table id= "estado-resultado"
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
                <td>{estado.col1 ? toPisto(estado.col1) : ""}</td>
                <td>{estado.col2 ? toPisto(estado.col2) : ""}</td>
                <td>{estado.col3 ? toPisto(estado.col3) : ""}</td>
                <td>{estado.col4 ? toPisto(estado.col4) : ""}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default EstadoResultado;
