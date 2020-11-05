import React from 'react';
import Header from "components/Headers/Header.js";
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col, Table } from "reactstrap";

class Partidas extends React.Component{
    state = {
        contador: 1,
    }

    render(){
        return (
            <div>
                <Header/>
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
                                        onClick={e => e.preventDefault()}
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
                                    <strong>Partida # {this.state.contador}</strong>
                                    </h5>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col md="12">
                                            <FormGroup>
                                                <label
                                                className="form-control-label"
                                                htmlFor="fecha"
                                                >
                                                Fecha
                                                </label>
                                                <Input
                                                className="form-control-alternative"
                                                id="fecha"
                                                type="text"
                                                />
                                            </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                            <FormGroup>
                                                <label className="form-control-label" htmlFor="descripcion">
                                                    Descripción
                                                </label>
                                                <Input
                                                className="form-control-alternative"
                                                id="descripcion"
                                                rows="4"
                                                type="textarea"
                                                />
                                            </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
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
                                                <th scope="col">Numero</th>
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
                                                   <th><Button color="primary" size="sm">Editar</Button><Button color="danger" size="sm">Eliminar</Button></th>
                                                </tr>  
                                            </tbody>
                                           </Table>
                                        </Row>
                                        <br></br>
                                        {/*Form de las cuentas */}
                                        <Row>
                                            <Col md="12">
                                            <FormGroup>
                                                <label className="form-control-label" htmlFor="cuenta">
                                                    Nombre de la Cuenta
                                                </label>
                                                <Input
                                                className="form-control-alternative"
                                                id="cuenta"
                                                type="text"
                                                />
                                            </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="6">
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
                                            <Col md="6">
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
                                        </Row>
                                        <Row>
                                            <Col md="6">
                                            <FormGroup>
                                                <label className="form-control-label" htmlFor="numcuenta">
                                                    Número de Cuenta
                                                </label>
                                                <Input
                                                className="form-control-alternative"
                                                id="numcuenta"
                                                type="number"
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
                                        <Row>
                                            <Col md="12">
                                            <FormGroup>
                                                <label className="form-control-label" htmlFor="descripcionCuenta">
                                                    Descripción
                                                </label>
                                                <Input
                                                className="form-control-alternative"
                                                id="descripcionCuenta"
                                                rows="4"
                                                type="textarea"
                                                />
                                            </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center">
                                            <Col className="text-right">
                                                <Button
                                                    color="primary"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                    size="sm"
                                                >
                                                    Agregar Cuenta
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>        
                                </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default Partidas;