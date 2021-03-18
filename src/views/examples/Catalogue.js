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
    InputGroupAddon,
    InputGroupText,
    Input,
    InputGroup,
    CardHeader,
    UncontrolledCollapse,
    Form,
    FormGroup,
    Table,
    Container,
    Row,
    Col
} from "reactstrap";
import { jsPDF } from "jspdf";
import Header from "components/Headers/Header.js";
import Accounts from "extra/accounts"


class Catalogue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeNav: 1,
            chartExample1Data: "data1",
            searchByNames: ''
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
    handleSearchName = event => {
        this.setState({ searchByNames: event.target.value })
    }
    savePdf = () => {
        try {
            var doc = new jsPDF();

            doc.setFontSize(40);
            doc.text("Catalogo de cuentas", 40, 30);
            doc.setFontSize(10);
            
            var generateData = function() {
                var result = [];
                var data = {
                  "Codigo": "",
                  "Nombre": "",
                };
                for (var i = 0; i < Accounts.accounts.length; i += 1) {
                  data.Codigo = (Accounts.accounts[i][0]).toString();
                  data.Nombre = (Accounts.accounts[i][1]).toString();
                  result.push(Object.assign({}, data));
                }
                return result;
              };
              
              function createHeaders(keys) {
                var result = [];
                for (var i = 0; i < keys.length; i += 1) {
                  result.push({
                    id: keys[i],
                    name: keys[i],
                    prompt: keys[i],
                    width: 65,
                    align: "center",
                    padding: 0
                  });
                }
                return result;
              }
              
              var headers = createHeaders([
                "Codigo",
                "Nombre",
              ]);
            var doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "portrait" });
            doc.table(1, 1, generateData(), headers, { autoSize: true });

            doc.save("Catalogo de Cuentas.pdf")

        }
        catch (error) {
            console.log(error)
        }
    }

    render() {
        const { searchByNames } = this.state;
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
                                    <Form>
                                        <FormGroup row>
                                            <Col sm={5}>
                                                <h1>Catálogo de Cuentas</h1>
                                            </Col>
                                            <Col sm={3}> 
                                                <Button color="danger" size="md" onClick={this.savePdf}>
                                                    Exportar PDF
                                                </Button>
                                            </Col>
                                            <Col sm={3}>
                                                <FormGroup className="mb-0">
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="fas fa-search" />
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input placeholder="Search" type="text" onInput={this.handleSearchName} />
                                                    </InputGroup>
                                                </FormGroup>
                                            </Col>
                                        </FormGroup>
                                    </Form>
                                </CardHeader>
                                {/* ACTIVOS */}
                                    <Button color="transparent" id="toggler">
                                        <div>
                                            <span>
                                                Activos
                                            </span>
                                        </div>
                                    </Button>
                                    <UncontrolledCollapse toggler="#toggler">
                                    <Table className="align-items-center table-flush" responsive>
                                        <tbody>
                                            {
                                                Accounts.accounts.map((account => {
                                                    const searchRegex = new RegExp(
                                                        searchByNames.split(/ /).filter(l => l !== '').join('|'),
                                                        'i'
                                                    );
                                                    const r1 = account && account[0].search(searchRegex);
                                                    const r2 = account && account[1].search(searchRegex);
                                                    if (r1 === -1 && r2 === -1 && searchByNames.length > 0) {
                                                        return <tr/>
                                                        
                                                    }
                                                    if (account[2] === 'activo') {
                                                        return (
                                                            <tr>
                                                                <td>
                                                                    {account[0]}
                                                                </td>
                                                                <td>
                                                                    {account[1]}
                                                                </td>
                                                            </tr>
                                                        )
                                                    }

                                                }))
                                            }
                                        </tbody>
                                        </Table>
                                    </UncontrolledCollapse>
                                    <Button color="transparent" id="toggler1">
                                        <div>
                                            <span>
                                                Pasivos
                                            </span>
                                        </div>
                                    </Button>
                                    <UncontrolledCollapse toggler="#toggler1">
                                    <Table className="align-items-center table-flush" responsive>
                                        <tbody>
                                            {
                                                Accounts.accounts.map((account => {
                                                    const searchRegex = new RegExp(
                                                        searchByNames.split(/ /).filter(l => l !== '').join('|'),
                                                        'i'
                                                    );
                                                    const r1 = account && account[0].search(searchRegex);
                                                    const r2 = account && account[1].search(searchRegex);
                                                    if (r1 === -1 && r2 === -1 && searchByNames.length > 0) {
                                                        return <tr/>
                                                        
                                                    }
                                                    
                                                    if (account[2] === 'pasivo') {
                                                        return (
                                                            <tr>
                                                                <td>
                                                                    {account[0]}
                                                                </td>
                                                                <td>
                                                                    {account[1]}
                                                                </td>
                                                            </tr>
                                                        )
                                                    }

                                                }))
                                            }
                                        </tbody>
                                        </Table>
                                    </UncontrolledCollapse>
                                    <Button color="transparent" id="toggler2">
                                        <div>
                                            <span>
                                                Patrimonio
                                            </span>
                                        </div>
                                    </Button>
                                    <UncontrolledCollapse toggler="#toggler2">
                                    <Table className="align-items-center table-flush" responsive>
                                        <tbody>
                                            {
                                                Accounts.accounts.map((account => {
                                                    const searchRegex = new RegExp(
                                                        searchByNames.split(/ /).filter(l => l !== '').join('|'),
                                                        'i'
                                                    );
                                                    const r1 = account && account[0].search(searchRegex);
                                                    const r2 = account && account[1].search(searchRegex);
                                                    if (r1 === -1 && r2 === -1 && searchByNames.length > 0) {
                                                        return <tr/>
                                                        
                                                    }
                                                    if (account[2] === 'patrimonio') {
                                                        return (
                                                            <tr>
                                                                <td>
                                                                    {account[0]}
                                                                </td>
                                                                <td>
                                                                    {account[1]}
                                                                </td>
                                                            </tr>
                                                        )
                                                    }

                                                }))
                                            }

                                        </tbody>
                                        </Table>
                                    </UncontrolledCollapse>
                                    <Button color="transparent" id="toggler3">
                                        <div>
                                            <span>
                                                Cuentas de Ingresos
                                            </span>
                                        </div>
                                    </Button>
                                    <UncontrolledCollapse toggler="#toggler3">
                                    <Table className="align-items-center table-flush" responsive>
                                        <tbody>
                                            {
                                                Accounts.accounts.map((account => {
                                                    const searchRegex = new RegExp(
                                                        searchByNames.split(/ /).filter(l => l !== '').join('|'),
                                                        'i'
                                                    );
                                                    const r1 = account && account[0].search(searchRegex);
                                                    const r2 = account && account[1].search(searchRegex);
                                                    if (r1 === -1 && r2 === -1 && searchByNames.length > 0) {
                                                        return <tr/>
                                                        
                                                    }
                                                    if (account[2] === 'Cuentas de Ingresos') {
                                                        return (
                                                            <tr>
                                                                <td>
                                                                    {account[0]}
                                                                </td>
                                                                <td>
                                                                    {account[1]}
                                                                </td>
                                                            </tr>
                                                        )
                                                    }

                                                }))
                                            }

                                        </tbody>
                                        </Table>
                                    </UncontrolledCollapse>
                                    <Button color="transparent" id="toggler4">
                                        <div>
                                            <span>
                                                Cuentas de Costos y Gastos
                                            </span>
                                        </div>
                                    </Button>
                                    <UncontrolledCollapse toggler="#toggler4">
                                    <Table className="align-items-center table-flush" responsive>
                                        <tbody>
                                            {
                                                Accounts.accounts.map((account => {
                                                    const searchRegex = new RegExp(
                                                        searchByNames.split(/ /).filter(l => l !== '').join('|'),
                                                        'i'
                                                    );
                                                    const r1 = account && account[0].search(searchRegex);
                                                    const r2 = account && account[1].search(searchRegex);
                                                    if (r1 === -1 && r2 === -1 && searchByNames.length > 0) {
                                                        return <tr/>
                                                        
                                                    }
                                                    if (account[2] === 'Cuentas de Costos y Gastos') {
                                                        return (
                                                            <tr>
                                                                <td>
                                                                    {account[0]}
                                                                </td>
                                                                <td>
                                                                    {account[1]}
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                }))
                                            }
                                        </tbody>
                                        </Table>
                                    </UncontrolledCollapse>
                                    <Button color="transparent" id="toggler5">
                                        <div>
                                            <span>
                                                Cuenta de Impuesto sobre Venta
                                            </span>
                                        </div>
                                    </Button>
                                    <UncontrolledCollapse toggler="#toggler5">
                                        <Table className="align-items-center table-flush" responsive>
                                        <tbody>
                                            {
                                                Accounts.accounts.map((account => {
                                                    const searchRegex = new RegExp(
                                                        searchByNames.split(/ /).filter(l => l !== '').join('|'),
                                                        'i'
                                                    );
                                                    const r1 = account && account[0].search(searchRegex);
                                                    const r2 = account && account[1].search(searchRegex);
                                                    if (r1 === -1 && r2 === -1 && searchByNames.length > 0) {
                                                        return <tr/>
                                                        
                                                    }
                                                    if (account[1] === 'Impuesto Sobre Venta') {
                                                        return (
                                                            <tr>
                                                                <td>
                                                                    {account[0]}
                                                                </td>
                                                                <td>
                                                                    {account[1]}
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                }))
                                            }
                                        </tbody>
                                        </Table>
                                    </UncontrolledCollapse>
                            </Card>
                        </div>
                    </Row>
                </Container >
            </>
        );
    }
}

export default Catalogue;
