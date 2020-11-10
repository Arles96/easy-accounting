import React from "react";
import { Button, FormGroup, Form, Input, Row, Col } from "reactstrap";
import Table from "../cuentas/Table";

const countForm = () => {
  return (
    <div>
      <div className="pl-lg-4">
        {/*Tabla*/}
        <Row>
          <Col>
            <Table tipo="debe" />
          </Col>
          <Col>
            <Table tipo="haber" />
          </Col>
        </Row>
        <br></br>
        {/*Form de las cuentas */}
        <Form>
          <Row>
            <Col md="6">
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
            <Col md="6">
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
          </Row>
          <Row>
            <Col md="6">
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

            <Col md="6">
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
};

export default countForm;
