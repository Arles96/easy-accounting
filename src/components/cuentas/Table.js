import React from "react";
import { Row, Table } from "reactstrap";

const Cuenta = (props) => {
  return (
    <div>
      <div className="pl-lg-4">
        <Row>
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col" className="text-center">
                  Cuenta
                </th>
                <th scope="col" className="text-center">
                  {props.tipo}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="text-center">Cuenta</th>
                <th className="text-center">20000</th>
              </tr>
            </tbody>
          </Table>
        </Row>
        <br></br>
      </div>
    </div>
  );
};

export default Cuenta;
