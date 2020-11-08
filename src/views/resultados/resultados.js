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
import { Container, Row } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import TablaT from "../../components/resultados/TablaT";
import BalanceGeneral from "../../components/resultados/BalanceGeneral";

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

  constructor() {
    super();
    //const { cuentas } = props;

    const cuentas = testData;

    const arrCuentas = cuentas.map(({cuenta, debe, haber})=>{
      const filas = [];
      let contDebe = 0;
      let contHaber = 0;
      let totalDebe = 0;
      let totalHaber = 0;
      while (debe[contDebe] !== undefined || haber[contHaber] !== undefined) {
        let newFila = {
          debe: null,
          haber: null,
        };
        if (debe[contDebe] !== undefined) {
          newFila.debe = debe[contDebe];
          totalDebe += debe[contDebe].valor;
        }
        if (haber[contHaber] !== undefined) {
          newFila.haber = haber[contHaber];
          totalHaber += haber[contHaber].valor;
        }
        filas.push(newFila);
        contHaber++;
        contDebe++;
      }

      const total = totalDebe - totalHaber;
      return ({
        cuenta,
        filas,
        totalDebe,
        totalHaber,
        total
      })
    });

    arrCuentas.forEach((t)=>console.log(t))

    this.state = {arrCuentas};
  }

  render() {
    return (
      <>
        <Header />
        <Container fluid>
          <Row>
            <div className="card-grid">
              {this.state.arrCuentas.map((datosTabla)=>(
                <TablaT key={datosTabla.cuenta + "tt"} datosTabla={datosTabla}/>
              ))}
              <BalanceGeneral arrCuentas={this.state.arrCuentas}/>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Tables;
