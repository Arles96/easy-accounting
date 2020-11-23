import React from "react";
import { Row, Table, Card, Container, CardHeader, Button } from "reactstrap";

const CuentasTabla = (props) => {
  return (
    <Card className="shadow">
      <CardHeader className="align-center">
        <h3 className="text-center">
          <strong>{props.tipo}</strong>
        </h3>
      </CardHeader>
      <div>
        <Row>
          <Container>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="text-center">
                    <strong>Cuenta</strong>
                  </th>
                  <th scope="col" className="text-center">
                    <strong>Cantidad</strong>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {props.arreglo.map((elemento) => {
                  return (
                    <tr key={elemento.idAccount}>
                      <th className="text-center">{elemento.nameAccount}</th>
                      <th className="text-center">{elemento.money}</th>
                      <th>
                        <Button color="link" size="sm">
                          X
                        </Button>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </Row>
        <br></br>
      </div>
    </Card>
  );
};

export default CuentasTabla;
