import React from "react";

import { Card, CardHeader, Table, Button, Container } from "reactstrap";
import { toPisto } from "../utils";
import { deleteAccountOperation } from "../../api/accountBookApi";

class ListarPartidas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partida: this.props.partida,
    };
  }

  handleDelete = () => {
    console.log("ELID", this.state.partida._id);
    deleteAccountOperation(this.state.partida._id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
              {partida.arrayDebitAccounts.map((cuenta, index) => (
                <>
                  <tr key={"filaDebito" + index + " " + cuenta.nameAccount}>
                    <td>{cuenta.nameAccount}</td>
                    <td className="left-border-cell">
                      {toPisto(cuenta.money)}
                    </td>
                    <td></td>
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
              {partida.arrayCreditAccounts.map((cuenta, index) => (
                <>
                  <tr key={"filaCredito" + index + " " + cuenta.nameAccount}>
                    <td>{cuenta.nameAccount}</td>
                    <td className="left-border-cell"></td>
                    <td>{toPisto(cuenta.money)}</td>
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
              <tr>
                <td className="balanza-totales-cells" colSpan="3">
                  {partida.description}
                </td>
              </tr>
            </tbody>
          </Table>
        </Card>
        <br></br>
        <Container fluid>
          <a
            href={`/admin/editar-partida/${partida.idExercise}/${partida._id}`}
            className="btn btn-secondary btn-lg active"
            role="button"
            aria-pressed="true"
          >
            Editar
          </a>
          <Button color="danger" size="md" onClick={this.handleDelete}>
            Eliminar
          </Button>
        </Container>
      </div>
    );
  }
}

export default ListarPartidas;
