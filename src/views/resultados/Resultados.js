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
import { Container, Button, TabContent, TabPane } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import TablaT from "../../components/resultados/TablaT";
import BalanzaComprobacion from "../../components/resultados/BalanzaComprobacion";
import EstadoResultado from "components/resultados/EstadoResultado";
import BalanceGeneral from "components/resultados/BalanceGeneral";
import {generateMajorization} from "../../api/accountBookApi";
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
  },
];

class Tables extends React.Component {
  constructor() {
    super();
    //const { cuentas } = props;
    const TData = generateMajorization(1).then(response => {
      console.log("Entra: ", response);
    });
    const cuentas = testData;

    const arrCuentas = cuentas.map(({ cuenta, debe, haber }) => {
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
      return {
        cuenta,
        filas,
        totalDebe,
        totalHaber,
        total,
      };
    });
    this.toggle = this.toggle.bind(this);
    this.state = { arrCuentas, activeTab: 1, prueba: []};
  }

  componentDidMount(){
    generateMajorization(1).then(response => {
      console.log("Entró ", response)
      console.log("resp[0] ", response.data[0])
      const arr = response.data.map(({nameAccount, code, debit, credit, subtotalDebit, subtotalCredit, sectionAccount, total}) => {
      const rows = [];
      let contDebe = 0;
      let contHaber = 0;
      while (debit[contDebe] !== undefined || credit[contHaber] !== undefined) {
        let newFila = {
          debit: null,
          credit: null,
        };
        if (debit[contDebe] !== undefined) {
          newFila.debit = debit[contDebe];
        }
        if (credit[contHaber] !== undefined) {
          newFila.credit = credit[contHaber];
        }
        rows.push(newFila);
        contHaber++;
        contDebe++;
      }
        return {nameAccount, code, rows, subtotalDebit, subtotalCredit, sectionAccount, total}
      })
      this.setState({prueba: arr})
      console.log("Estado: ", this.state)
    })
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }

  render() {
    return (
      <>
        <Header />
        <Container fluid className="botones-resultados">
          <Button
            color="primary"
            onClick={() => this.toggle(1)}
            size="md"
          >
            Tablas T
          </Button>
          <Button
            color="primary"
            onClick={() => this.toggle(2)}
            size="md"
          >
            Balanza de Comprobacion
          </Button>
          <Button
            color="primary"
            onClick={() => this.toggle(3)}
            size="md"
          >
            Estado de Resultados
          </Button>
          <Button
            color="primary"
            onClick={() => this.toggle(4)}
            size="md"
          >
            Balance General
          </Button>
        </Container>
        <Container fluid className="botones-impresion">
          <Button
            color="success"
            size="md"
          >
            Exportar Excel
          </Button>
          <Button
            color="danger"
            size="md"
          >
            Exportar PDF
          </Button>
        </Container>

        {/* <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Container fluid>
              <div className="card-grid">
                {this.state.activeTab === 1
                  ? this.state.arrCuentas.map((datosTabla) => (
                      <TablaT
                        key={datosTabla.cuenta + "tt"}
                        datosTabla={datosTabla}
                      />
                    ))
                  : null}
              </div>
            </Container>
          </TabPane>
          <TabPane tabId="2">
            <Container fluid>
              <div className="card-grid">
                {this.state.activeTab === 2 ? (
                  <BalanceGeneral arrCuentas={this.state.arrCuentas} />
                ) : null}
              </div>
            </Container>
          </TabPane>
          <TabPane tabId="3">
            <Container fluid>
              <div className="card-grid">
                {this.state.activeTab === 3 ? <EstadoResultado /> : null}
              </div>
            </Container>
          </TabPane>
        </TabContent> */}
        <Container fluid>
          <div className="card-grid">
            {
              {
                1: this.state.prueba.map((datosTabla) => (
                  <TablaT
                    key={datosTabla.nameAccount + "tt"}
                    datosTabla={datosTabla}
                  />
                )),
                2: <BalanzaComprobacion arrCuentas={this.state.arrCuentas} />,
                3: <EstadoResultado />,
                4: <BalanceGeneral />
              }[this.state.activeTab]
            }
          </div>
        </Container>
      </>
    );
  }
}

export default Tables;
