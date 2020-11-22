import React from "react";
import { Row, Table, Card, Container, CardHeader } from "reactstrap";

const Cuenta = (props) => {
  return (
    <Card className="shadow">
      <CardHeader className="align-center">
        <h3 className="text-center">{props.tipo}</h3>
      </CardHeader>
      <div className="">
        <Row>
          <Container>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="text-center">
                    Cuenta
                  </th>
                  <th scope="col" className="text-center">
                    Cantidad
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="text-center">Cuenta</th>
                  <th className="text-center">20000</th>
                </tr>
                <tr>
                  <th className="text-center">Cuenta</th>
                  <th className="text-center">4000</th>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Row>
        <br></br>
      </div>
    </Card>
  );
};

export default Cuenta;
