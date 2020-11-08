import React from "react";
import { Button, FormGroup, Form, Input, Row, Col, Table } from "reactstrap";

class Cuenta extends React.Component {
  render() {
    return (
      <div>
        <hr className="my-4" />
        <h5 className="heading-small text-black mb-4">
          <strong>Cuentas</strong>
        </h5>
        <div className="pl-lg-4">
          {/*Tabla*/}
          <Row>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Cuenta</th>
                  <th scope="col">Número de Cuenta</th>
                  <th scope="col">Debe</th>
                  <th scope="col">Haber</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Descripción</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Banco</th>
                  <th>1012</th>
                  <th>20000</th>
                  <th></th>
                  <th>4523</th>
                  <th>Este es un texto de prueba </th>
                  <th>
                    <Button color="primary" size="sm">
                      Editar
                    </Button>
                    <Button color="danger" size="sm">
                      Eliminar
                    </Button>
                  </th>
                </tr>
              </tbody>
            </Table>
          </Row>
          <br></br>
          {/*Form de las cuentas */}
          <Form>
            <Row>
              <Col md="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="nombre_cuenta">
                    Nombre de la Cuenta
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="nombre_cuenta"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="numero_cuenta">
                    Número de Cuenta
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="numero_cuenta"
                    type="number"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="descripcion_cuenta"
                  >
                    Descripción
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="descripcion_cuenta"
                    rows="1"
                    type="textarea"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="debe">
                    Debe
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="debe"
                    type="number"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="haber">
                    Haber
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="haber"
                    type="number"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="cantidad">
                    Cantidad
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="cantidad"
                    type="number"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row className="align-items-center">
              <Col className="text-right">
                <Button
                  color="primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  Agregar Cuenta
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}

export default Cuenta;
