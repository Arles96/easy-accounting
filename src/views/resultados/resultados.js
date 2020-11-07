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

// reactstrap components
import { Card, CardHeader, Table, Container, Row } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import TablaT from "./TablaT.js";

const testData = [
  {
    cuenta: "Cuenta X",
    debe: [
      {
        partida: "part #",
        valor: 5000,
      },
      {
        partida: "part #",
        valor: 5000,
      },
      {
        partida: "part #",
        valor: 5000,
      },
      {
        partida: "part #",
        valor: 5000,
      },
      {
        partida: "part #",
        valor: 5000,
      },
    ],
    haber: [
      {
        partida: "part #",
        valor: 5000,
      },
      {
        partida: "part #",
        valor: 5000,
      },
      {
        partida: "part #",
        valor: 5000,
      },
    ],
  },
  {
    cuenta: "Cuenta Y",
    debe: [
      {
        partida: "part #",
        valor: 5000,
      },
      {
        partida: "part #",
        valor: 5000,
      },
      {
        partida: "part #",
        valor: 5000,
      },
      {
        partida: "part #",
        valor: 5000,
      },
      {
        partida: "part #",
        valor: 5000,
      },
    ],
    haber: [
      {
        partida: "part #",
        valor: 53000,
      },
      {
        partida: "part #",
        valor: 5000,
      },
      {
        partida: "part #",
        valor: 5000,
      },
    ],
  },
  {
    cuenta: "Cuenta Z",
    debe: [
      {
        partida: "part #",
        valor: 1000,
      },
      {
        partida: "part #",
        valor: 5000,
      },
      {
        partida: "part #",
        valor: 5000,
      },
      {
        partida: "part #",
        valor: 5000,
      },
    ],
    haber: [
      {
        partida: "part #",
        valor: 5000,
      },
      {
        partida: "part #",
        valor: 5000,
      },
      {
        partida: "part #",
        valor: 5000,
      },
    ],
  },
  {
    cuenta: "Cuenta A",
    debe: [
      {
        partida: "part #",
        valor: 5000,
      },
      {
        partida: "part #",
        valor: 5000,
      },
    ],
    haber: [
      {
        partida: "part #",
        valor: 5000,
      },
      {
        partida: "part #",
        valor: 5000,
      },
    ],
  }
];

class Tables extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container fluid>
          {/* Table */}
          <Row>
            <div className="card-grid">
              {testData.map((cuenta)=>(
                <TablaT key={cuenta.cuenta + "tt"} cuenta={cuenta.cuenta} debe={cuenta.debe} haber={cuenta.haber}/>
              ))}
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Tables;
