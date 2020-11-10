import React from "react";
import Header from "components/Headers/Header.js";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import CuentaForm from "components/cuentas/Form.js";
var DatePicker = require("reactstrap-date-picker");

class Partidas extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container className="mt--8" fluid>
          <Row>
            <Col className="order-xl-1 " xl="">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Ingresar Partida</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="success"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Guardar Partida
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h5 className="heading-small text-black mb-4">
                      <strong>Partida # 1</strong>
                    </h5>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="3">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="fecha"
                            >
                              Fecha
                            </label>
                            <DatePicker id="fecha" dateFormat="DD/MM/YYYY" />
                          </FormGroup>
                        </Col>
                        <Col md="9">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="partida_descripcion"
                            >
                              Descripción
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="partida_descripcion"
                              rows="1"
                              type="textarea"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                  </Form>
                  <CuentaForm />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Partidas;
