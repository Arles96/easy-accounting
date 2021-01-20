import React from "react";
import Alerta from "../../components/cuentas/Alerta";
import Header from "components/Headers/Header.js";
import { addAccountOperation } from "../../api/accountBookApi";
import { catalogoCuentas } from "../../components/catalogoCuentas";
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
  Table,
} from "reactstrap";
var DatePicker = require("reactstrap-date-picker");

var contadorPartida = 1;

class Partidas extends React.Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.state = {
      idEjercicio: id,
      nombre_cuenta: "",
      cantidad: "",
      tipo: "Debe",
      codigo_cuenta: "",
      descripcion_cuenta: "",
      contador: contadorPartida,
      fecha: new Date().toISOString(),
      descripcion_partida: "",
      validar: false,
      data_debe: [],
      data_haber: [],
    };
  }

  handlerCuentaNombre = (event) => {
    this.setState({ nombre_cuenta: event.target.value });
  };
  handlerCuentaCantidad = (event) => {
    this.setState({ cantidad: event.target.value });
  };
  handlerCuentaTipo = (event) => {
    this.setState({ tipo: event.target.value });
  };
  handlerCuentaCodigo = (event) => {
    this.setState({ codigo_cuenta: event.target.value });
  };
  handlerCuentaDescripcion = (event) => {
    this.setState({ descripcion_cuenta: event.target.value });
  };
  handlerPartidaFecha = (value, formattedValue) => {
    this.setState({ fecha: value, formattedValue: formattedValue });
  };
  handlerPartidaDescripcion = (event) => {
    this.setState({ descripcion_partida: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.tipo === "Debe") {
      this.state.data_debe.push({
        idAccount: this.state.codigo_cuenta,
        numberAccount: contadorPartida,
        nameAccount: this.state.nombre_cuenta,
        money: parseInt(this.state.cantidad, 10),
        description: this.state.descripcion_cuenta,
      });
    } else {
      this.state.data_haber.push({
        idAccount: this.state.codigo_cuenta,
        numberAccount: contadorPartida,
        nameAccount: this.state.nombre_cuenta,
        money: parseInt(this.state.cantidad, 10),
        description: this.state.descripcion_cuenta,
      });
    }

    this.setState({
      nombre_cuenta: "",
      cantidad: "",
      tipo: "Debe",
      codigo_cuenta: "",
      descripcion_cuenta: "",
      validar: false,
    });
  };

  handleSubmitPartida = (event) => {
    event.preventDefault();
    this.setState({
      validar: false,
    });
    var acum_haber = 0,
      acum_debe = 0;
    this.state.data_haber.forEach((item) => {
      acum_haber += item.money;
    });
    this.state.data_debe.forEach((item) => {
      acum_debe += item.money;
    });
    if (acum_haber === acum_debe && acum_haber !== 0 && acum_debe !== 0) {
      addAccountOperation({
        idExercise: this.state.idEjercicio,
        number: contadorPartida,
        description: this.state.descripcion_cuenta,
        operationDate: this.state.fecha,
        arrayCreditAccounts: this.state.data_haber,
        arrayDebitAccounts: this.state.data_debe,
      })
        .then((res) => {
          console.log("Agregar partida:", res);
        })
        .catch((err) => {
          console.log("ERROR:", err);
        });
      this.setState({
        contador: ++contadorPartida,
        fecha: new Date().toISOString(),
        descripcion_partida: "",
      });
      this.setState({
        validar: false,
        data_debe: [],
        data_haber: [],
      });
    } else {
      this.setState({
        validar: true,
      });
    }
  };

  handleBuscar = () => {
    const nombreCuenta = catalogoCuentas(this.state.codigo_cuenta);
    this.setState({ nombre_cuenta: nombreCuenta });
  };

  eliminarDebe = (id) => {
    const data = this.state.data_debe.filter(
      (cuenta) => cuenta.idAccount !== id
    );
    this.setState({ data_debe: data });
  };
  eliminarHaber = (id) => {
    const data = this.state.data_haber.filter(
      (cuenta) => cuenta.idAccount !== id
    );
    this.setState({ data_haber: data });
  };

  render() {
    const { history } = this.props;
    return (
      <div>
        <Header />
        <Container className="mt--8" fluid>
          {this.state.validar ? <Alerta /> : ""}
          <Row>
            <Col className="order-xl-1 " xl="">
              <Card className="bg-light shadow">
                <CardHeader className="bg-white border-0">
                <Button color="primary" onClick={() => history.push(`/admin/listar-partida/${this.state.idEjercicio}`)} size="md">
                  <i className="ni ni-bold-left"></i> Atrás
                </Button>
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Libro Diario</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="success"
                        type="submit"
                        onClick={this.handleSubmitPartida}
                        size="sm"
                      >
                        Guardar Partida
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={this.handleSubmitPartida}>
                    <h4 className="heading-small text-black mb-4">
                      <strong>Partida #{this.state.contador} </strong>
                    </h4>

                    <div className="pl-lg-4">
                      <Row>
                        <Col md="3">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="fecha"
                            >
                              <strong>Fecha</strong>
                            </label>
                            <DatePicker
                              id="fecha"
                              dateFormat="DD/MM/YYYY"
                              value={this.state.fecha}
                              onChange={(v, f) =>
                                this.handlerPartidaFecha(v, f)
                              }
                            />
                          </FormGroup>
                        </Col>
                        <Col md="9">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="partida_descripcion"
                            >
                              <strong>Descripción de la Partida</strong>
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="partida_descripcion"
                              rows="1"
                              type="textarea"
                              value={this.state.descripcion_partida}
                              onChange={this.handlerPartidaDescripcion}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                  </Form>

                  {/* Componente de la tabla */}
                  <div className="pl-lg-4">
                    {/*Tabla*/}
                    <Row>
                      <Col>
                        <Card className="shadow">
                          <CardHeader className="align-center">
                            <h3 className="text-center">
                              <strong>Debe</strong>
                            </h3>
                          </CardHeader>
                          <div>
                            <Row>
                              <Container>
                                <Table
                                  className="align-items-center table-flush"
                                  responsive
                                >
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
                                    {this.state.data_debe.map((elemento) => {
                                      return (
                                        <tr key={elemento.idAccount}>
                                          <th className="text-center">
                                            {elemento.nameAccount}
                                          </th>
                                          <th className="text-center">
                                            {elemento.money}
                                          </th>
                                          <th>
                                            <Button
                                              onClick={() =>
                                                this.eliminarDebe(
                                                  elemento.idAccount
                                                )
                                              }
                                              color="link"
                                              size="sm"
                                            >
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
                      </Col>
                      <Col>
                        <Card className="shadow">
                          <CardHeader className="align-center">
                            <h3 className="text-center">
                              <strong>Haber</strong>
                            </h3>
                          </CardHeader>
                          <div>
                            <Row>
                              <Container>
                                <Table
                                  className="align-items-center table-flush"
                                  responsive
                                >
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
                                    {this.state.data_haber.map((elemento) => {
                                      return (
                                        <tr key={elemento.idAccount}>
                                          <th className="text-center">
                                            {elemento.nameAccount}
                                          </th>
                                          <th className="text-center">
                                            {elemento.money}
                                          </th>
                                          <th>
                                            <Button
                                              onClick={() =>
                                                this.eliminarHaber(
                                                  elemento.idAccount
                                                )
                                              }
                                              color="link"
                                              size="sm"
                                            >
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
                      </Col>
                    </Row>
                    <br></br>

                    {/*Form de las cuentas */}
                    <Form onSubmit={this.handleSubmit}>
                      <Row>
                        <Col md="5">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="codigo_cuenta"
                            >
                              <strong>Código de Cuenta</strong>
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="codigo_cuenta"
                              type="text"
                              value={this.state.codigo_cuenta}
                              onChange={this.handlerCuentaCodigo}
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col md="1">
                          <FormGroup>
                            <label className="form-control-label text-light">
                              {"______________"}
                            </label>
                            <Button
                              onClick={this.handleBuscar}
                              color="success"
                              size="sm"
                            >
                              Buscar
                            </Button>
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="nombre_cuenta"
                            >
                              <strong>Nombre de la Cuenta</strong>
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="nombre_cuenta"
                              type="text"
                              value={this.state.nombre_cuenta}
                              onChange={this.handlerCuentaNombre}
                              disabled
                              required
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="cantidad"
                            >
                              <strong>Tipo</strong>
                            </label>
                            <Input
                              type="select"
                              name="select"
                              value={this.state.tipo}
                              onChange={this.handlerCuentaTipo}
                              required
                            >
                              <option>Debe</option>
                              <option>Haber</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="cantidad"
                            >
                              <strong>Cantidad</strong>
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="cantidad"
                              type="number"
                              value={this.state.cantidad}
                              onChange={this.handlerCuentaCantidad}
                              required
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="cuenta_descripcion"
                            >
                              <strong>Descripción de la Cuenta</strong>
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="cuenta_descripcion"
                              rows="1"
                              type="textarea"
                              value={this.state.descripcion_cuenta}
                              onChange={this.handlerCuentaDescripcion}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row className="align-items-center">
                        <Col className="text-right">
                          <Button type="submit" color="primary" size="sm">
                            Agregar Cuenta
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
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
