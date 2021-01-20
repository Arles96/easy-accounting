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
import Chart from "chart.js";
// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Form,
    FormGroup,
    Input,
    Table,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import {
    chartOptions,
    parseOptions,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import { AddExercise, getExercises, deleteExercises } from '../../api/exercisesApi';



class Exercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeNav: 1,
            chartExample1Data: "data1",
            name: '',
            description: '',
            ejercicios: []
        };
        if (window.Chart) {
            parseOptions(Chart, chartOptions());
        }
    }
    save = () => {
        try {
            AddExercise({ title: this.state.name, description: this.state.description }).then(response => {

            })
            this.list()

        }
        catch (error) {
            console.log(error)
        }
    }
    list = () => {
        try {
            getExercises()
                .then((data) => {
                    this.setState({ ejercicios: data.data.rows });
                    console.log(data.data.rows)
                })

        }
        catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.list()
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <>
                <Header />
                {/* Page content */}
                <Container className="mt--7" fluid>
                    <Row className="mt-5">
                        <Col className="mb-5 mb-xl-0" xl="12">
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <Row className="align-items-center">

                                        <CardBody>
                                            <Form>
                                                <h6 className="heading-small text-muted mb-4">
                                                    Nuevo Ejercicio
                    </h6>
                                                <div className="pl-lg-4">
                                                    <Row>
                                                        <Col lg="6">
                                                            <FormGroup>
                                                                <label
                                                                    className="form-control-label"
                                                                    htmlFor="input-username"
                                                                >
                                                                    Nombre del Ejercicio
                            </label>
                                                                <Input
                                                                    className="form-control-alternative"
                                                                    defaultValue="Nombre del ejercicio"
                                                                    id="input-username"
                                                                    placeholder="Nombre"
                                                                    type="text"
                                                                    name="name"
                                                                    value={this.state.name}
                                                                    onChange={this.handleChange}
                                                                />
                                                            </FormGroup>
                                                        </Col>

                                                        <Col md="12">
                                                            <FormGroup>
                                                                <label
                                                                    className="form-control-label"
                                                                    htmlFor="input-address"
                                                                >
                                                                    Descripción
                            </label>
                                                                <Input
                                                                    className="form-control-alternative"
                                                                    defaultValue="Descripción del nuevo ejercicio"
                                                                    id="input-address"
                                                                    placeholder="Descripción"
                                                                    type="text"
                                                                    name="description"
                                                                    value={this.state.description}
                                                                    onChange={this.handleChange}

                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Form>
                                        </CardBody>
                                        <div className="col text-right">
                                            <Button
                                                color="primary"
                                                href=""
                                                onClick={this.save}
                                                size="med"
                                            >
                                                Añadir
                                            </Button>
                                        </div>
                                    </Row>
                                </CardHeader>
                                <Table className="align-items-center table-flush" responsive>

                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nombre del Ejercicio</th>
                                            <th scope="col">Descripción</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.ejercicios.map((eje, i) => {
                                            var str1 = '#'
                                            var res = str1.concat(eje.id);
                                            return (
                                                <tr >
                                                    <td scope="row" key={i}>{i}</td>
                                                    <td>
                                                        <a href={res}>
                                                            {eje.doc.title} 
                                                        </a>
                                                    </td>
                                                        <td>{eje.doc.description}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </Table>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Exercise;
