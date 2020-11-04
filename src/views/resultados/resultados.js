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
import '../../index.scss';

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

class Tables extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container  fluid>
          {/* Table */}
          <Row>
            <div className="card-grid">
              <div className="table-panel">
                <Card className="table-card">
                  <CardHeader >
                    <h3 >Cuentas T</h3>
                  </CardHeader>
                  <Table  responsive>
                    <thead >
                      <tr>
                        <th scope="col">Débito</th>
                        <th scope="col">Crédito</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
              <div className="table-panel">
                <Card className="table-card">
                  <CardHeader >
                    <h3 >Cuentas T</h3>
                  </CardHeader>
                  <Table  responsive>
                    <thead >
                      <tr>
                        <th scope="col">Débito</th>
                        <th scope="col">Crédito</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
              <div className="table-panel">
                <Card className="table-card">
                  <CardHeader >
                    <h3 >Cuentas T</h3>
                  </CardHeader>
                  <Table  responsive>
                    <thead >
                      <tr>
                        <th scope="col">Débito</th>
                        <th scope="col">Crédito</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
              <div className="table-panel">
                <Card className="table-card">
                  <CardHeader >
                    <h3 >Cuentas T</h3>
                  </CardHeader>
                  <Table  responsive>
                    <thead >
                      <tr>
                        <th scope="col">Débito</th>
                        <th scope="col">Crédito</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
              <div className="table-panel">
                <Card className="table-card">
                  <CardHeader >
                    <h3 >Cuentas T</h3>
                  </CardHeader>
                  <Table  responsive>
                    <thead >
                      <tr>
                        <th scope="col">Débito</th>
                        <th scope="col">Crédito</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
              <div className="table-panel">
                <Card className="table-card">
                  <CardHeader >
                    <h3 >Cuentas T</h3>
                  </CardHeader>
                  <Table  responsive>
                    <thead >
                      <tr>
                        <th scope="col">Débito</th>
                        <th scope="col">Crédito</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
              <div className="table-panel">
                <Card className="table-card">
                  <CardHeader >
                    <h3 >Cuentas T</h3>
                  </CardHeader>
                  <Table  responsive>
                    <thead >
                      <tr>
                        <th scope="col">Débito</th>
                        <th scope="col">Crédito</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
              <div className="table-panel">
                <Card className="table-card">
                  <CardHeader >
                    <h3 >Cuentas T</h3>
                  </CardHeader>
                  <Table  responsive>
                    <thead >
                      <tr>
                        <th scope="col">Débito</th>
                        <th scope="col">Crédito</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
              <div className="table-panel">
                <Card className="table-card">
                  <CardHeader >
                    <h3 >Cuentas T</h3>
                  </CardHeader>
                  <Table  responsive>
                    <thead >
                      <tr>
                        <th scope="col">Débito</th>
                        <th scope="col">Crédito</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
              <div className="table-panel">
                <Card className="table-card">
                  <CardHeader >
                    <h3 >Cuentas T</h3>
                  </CardHeader>
                  <Table  responsive>
                    <thead >
                      <tr>
                        <th scope="col">Débito</th>
                        <th scope="col">Crédito</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
              <div className="table-panel">
                <Card className="table-card">
                  <CardHeader >
                    <h3 >Cuentas T</h3>
                  </CardHeader>
                  <Table  responsive>
                    <thead >
                      <tr>
                        <th scope="col">Débito</th>
                        <th scope="col">Crédito</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
              <div className="table-panel">
                <Card className="table-card">
                  <CardHeader >
                    <h3 >Cuentas T</h3>
                  </CardHeader>
                  <Table  responsive>
                    <thead >
                      <tr>
                        <th scope="col">Débito</th>
                        <th scope="col">Crédito</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
              <div className="table-panel">
                <Card className="table-card">
                  <CardHeader >
                    <h3 >Cuentas T</h3>
                  </CardHeader>
                  <Table  responsive>
                    <thead >
                      <tr>
                        <th scope="col">Débito</th>
                        <th scope="col">Crédito</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
              <div className="table-panel">
                <Card className="table-card">
                  <CardHeader >
                    <h3 >Cuentas T</h3>
                  </CardHeader>
                  <Table  responsive>
                    <thead >
                      <tr>
                        <th scope="col">Débito</th>
                        <th scope="col">Crédito</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
              <div className="table-panel">
                <Card className="table-card">
                  <CardHeader >
                    <h3 >Cuentas T</h3>
                  </CardHeader>
                  <Table  responsive>
                    <thead >
                      <tr>
                        <th scope="col">Débito</th>
                        <th scope="col">Crédito</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
              <div className="table-panel">
                <Card className="table-card">
                  <CardHeader >
                    <h3 >Cuentas T</h3>
                  </CardHeader>
                  <Table  responsive>
                    <thead >
                      <tr>
                        <th scope="col">Débito</th>
                        <th scope="col">Crédito</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
              <div className="table-panel">
                <Card className="table-card">
                  <CardHeader >
                    <h3 >Cuentas T</h3>
                  </CardHeader>
                  <Table  responsive>
                    <thead >
                      <tr>
                        <th scope="col">Débito</th>
                        <th scope="col">Crédito</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
              <div className="table-panel">
                <Card className="table-card">
                  <CardHeader >
                    <h3 >Cuentas T</h3>
                  </CardHeader>
                  <Table  responsive>
                    <thead >
                      <tr>
                        <th scope="col">Débito</th>
                        <th scope="col">Crédito</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
              <div className="table-panel">
                <Card className="table-card">
                  <CardHeader >
                    <h3 >Cuentas T</h3>
                  </CardHeader>
                  <Table  responsive>
                    <thead >
                      <tr>
                        <th scope="col">Débito</th>
                        <th scope="col">Crédito</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
              <div className="table-panel">
                <Card className="table-card">
                  <CardHeader >
                    <h3 >Cuentas T</h3>
                  </CardHeader>
                  <Table  responsive>
                    <thead >
                      <tr>
                        <th scope="col">Débito</th>
                        <th scope="col">Crédito</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
              <div className="table-panel">
                <Card className="table-card">
                  <CardHeader >
                    <h3 >Cuentas T</h3>
                  </CardHeader>
                  <Table  responsive>
                    <thead >
                      <tr>
                        <th scope="col">Débito</th>
                        <th scope="col">Crédito</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                      <tr>
                        <td>$2,500 USD</td>
                        <td>$3,000 USD</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Tables;
