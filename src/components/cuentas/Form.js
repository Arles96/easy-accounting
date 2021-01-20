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
            <Table tipo="Debe" />
          </Col>
          <Col>
            <Table tipo="Haber" />
          </Col>
        </Row>
        <br></br>
        {/*Form de las cuentas */}
        <Form>
          <Row>
            <Col md="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="nombre_cuenta">
                  <strong>Nombre de la Cuenta</strong>
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
                  <strong>Código de Cuenta</strong>
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
                  <strong>Descripción</strong>
                </label>
                <Input
                  className="form-control-alternative"
                  id="descripcion_cuenta"
                  rows="1"
                  type="textarea"
                />
              </FormGroup>
            </Col>

            <Col md="4">
              <FormGroup>
                <label className="form-control-label" htmlFor="cantidad">
                  <strong>Cantidad</strong>
                </label>
                <Input
                  className="form-control-alternative"
                  id="cantidad"
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <label className="form-control-label" htmlFor="cantidad">
                  {"  "}
                </label>
                <Input type="select" name="select">
                  <option>Debe</option>
                  <option>Haber</option>
                </Input>
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
