import React from "react";

import { Card, CardHeader, Table } from "reactstrap";
import { toPisto } from "../utils";

class ListarPartidas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partida: this.props.partida,
    };
  }

  render() {
    const partida = this.state.partida;
    return (
      <div className="table-panel balanza-comprobacion-panel">
        <Card className="table-card">
          <CardHeader>
            <h3>Partida #{partida.number}</h3>
          </CardHeader>
          <Table responsive>
            <thead>
              <tr>
                <th scope="col">Cuenta</th>
                <th scope="col" className="left-border-cell">
                  Debe
                </th>
                <th scope="col" className="left-border-cell">
                  Haber
                </th>
              </tr>
            </thead>
            <tbody>
              {partida.arrayCreditAccounts.map((cuenta, index) => (
                <>
                  <tr key={"filaCredito" + index + " " + cuenta.nameAccount}>
                    <td>{cuenta.nameAccount}</td>
                    <td className="left-border-cell">
                      {toPisto(cuenta.money)}
                    </td>
                    <td></td>
                  </tr>
                  {cuenta.description ? (
                    <tr
                      key={"filaCreditoDesc" + index + " " + cuenta.nameAccount}
                    >
                      <td>{cuenta.description}</td>
                      <td></td>
                      <td></td>
                    </tr>
                  ) : (
                    <></>
                  )}
                </>
              ))}
              {partida.arrayDebitAccounts.map((cuenta, index) => (
                <>
                  <tr key={"filaDebito" + index + " " + cuenta.nameAccount}>
                    <td>{cuenta.nameAccount}</td>
                    <td className="left-border-cell"></td>
                    <td>{toPisto(cuenta.money)}</td>
                  </tr>
                  {cuenta.description ? (
                    <tr
                      key={"filaDebitoDesc" + index + " " + cuenta.nameAccount}
                    >
                      <td>{cuenta.description}</td>
                      <td></td>
                      <td></td>
                    </tr>
                  ) : (
                    <></>
                  )}
                </>
              ))}
              <tr>
                <td className="balanza-totales-cells" colSpan="3">
                  {partida.description}
                </td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </div>
    );
  }
}

export default ListarPartidas;
