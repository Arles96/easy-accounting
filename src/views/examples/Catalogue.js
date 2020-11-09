/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// javascipt plugin for creating charts
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    UncontrolledCollapse,
    Form,
    FormGroup,
    Input,
    Table,
    Container,
    Row,
    Col
} from "reactstrap";

import Header from "components/Headers/Header.js";

class Catalogue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeNav: 1,
            chartExample1Data: "data1"
        };
        
    }
    toggleNavs = (e, index) => {
        e.preventDefault();
        this.setState({
            activeNav: index,
            chartExample1Data:
                this.state.chartExample1Data === "data1" ? "data2" : "data1"
        });
    };

    render() {
        return (
          <>
            <Header />
            {/* Page content */}
            <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Card tables</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                    {/* ACTIVOS */}
                    <thead className="thead-light">
                        <tr>
                        <th scope="col">Codigo</th>
                        <th scope="col">Cuenta</th>
                        <th scope="col">
                        <div>
                            <Button color="transparent" size="sm" id="toggler">
                                <div>
                                    <i className=" ni ni-fat-add" />
                                </div>
                            </Button>
                        </div>
                        </th>
                        <th scope="col" />
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <UncontrolledCollapse toggler="#toggler">
                            <td>$2,500 USD</td>
                        </UncontrolledCollapse>
                        </tr>
                    </tbody>
                    {/* PASIVOS */}
                    <thead className="thead-light">
                        <tr>
                        <th scope="col">Codigo</th>
                        <th scope="col">Cuenta</th>
                        <th scope="col">
                        <div>
                            <Button color="transparent" size="sm" id="toggler1">
                                <div>
                                    <i className=" ni ni-fat-add" />
                                </div>
                            </Button>
                        </div>
                        </th>
                        <th scope="col" />
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <UncontrolledCollapse toggler="#toggler1">
                            <td>$2,500 USD</td>
                        </UncontrolledCollapse>
                        </tr>
                    </tbody>
                    {/* PATRIMONIO */}
                    <thead className="thead-light">
                        <tr>
                        <th scope="col">Codigo</th>
                        <th scope="col">Cuenta</th>
                        <th scope="col">
                        <div>
                            <Button color="transparent" size="sm" id="toggler2">
                                <div>
                                    <i className=" ni ni-fat-add" />
                                </div>
                            </Button>
                        </div>
                        </th>
                        <th scope="col" />
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <UncontrolledCollapse toggler="#toggler2">
                            <td>$2,500 USD</td>
                        </UncontrolledCollapse>
                        </tr>
                    </tbody>
                    {/* CUENTAS DE INGRESOS */}
                    <thead className="thead-light">
                        <tr>
                        <th scope="col">Codigo</th>
                        <th scope="col">Cuenta</th>
                        <th scope="col">
                        <div>
                            <Button color="transparent" size="sm" id="toggler3">
                                <div>
                                    <i className=" ni ni-fat-add" />
                                </div>
                            </Button>
                        </div>
                        </th>
                        <th scope="col" />
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <UncontrolledCollapse toggler="#toggler3">
                            <td>$2,500 USD</td>
                        </UncontrolledCollapse>
                        </tr>
                    </tbody>
                    {/* CUENTAS DE COSTOS Y GASTOS */}
                    <thead className="thead-light">
                        <tr>
                        <th scope="col">Codigo</th>
                        <th scope="col">Cuenta</th>
                        <th scope="col">
                        <div>
                            <Button color="transparent" size="sm" id="toggler4">
                                <div>
                                    <i className=" ni ni-fat-add" />
                                </div>
                            </Button>
                        </div>
                        </th>
                        <th scope="col" />
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <UncontrolledCollapse toggler="#toggler4">
                            <td>$2,500 USD</td>
                        </UncontrolledCollapse>
                        </tr>
                    </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
          </>
        );
    }
}

export default Catalogue;
