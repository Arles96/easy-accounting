import React from "react";

import { Card, CardHeader, Table } from "reactstrap";
import { toPisto } from "../../components/utils";

// debe / haber
// {
//   partida: "",
//   valor: ""
// }

const EstadoResultado = () => {
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
              <th className="min-column-left"/>
              <th />
              <th />
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="min-column-left" >Ventas totales </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Descuentos sobre venta </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Rebajas sobre ventas </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Devoluciones sobre venta </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Ventas netas </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left bold-td" >COSTOS DE VENTAS </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Compras brutas </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Gastos sobre compra </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Compras totales </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Descuento sobre compra </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >rebajas sobre compra </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Devoluciones sobre compra </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Compras netas </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Inventario inicial</td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Mercaderia disponible para la venta </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Inventario Final</td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Costo de ventas </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Utilidad bruta en ventas </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left bold-td" >GASTOS OPERATIVOS </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Gastos de venta</td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Gastor de administración</td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Utilidad Operativa</td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Productos financieros </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Gastos Financieros </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Otros productos </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Otros gastos </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Utilidad antes del impuesto </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left bold-td" >Impuestos </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Impuesto sobre la Renta </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Impuesto Aportacion Solidaria </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Utilidad antes de reserva </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Reserva </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Reserva legal </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Reserva voluntaria</td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left" >Reserva estatutaria</td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td className="min-column-left bold-td" >Utilidad del ejercicio </td>
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
