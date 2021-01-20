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
import {
  generateMajorization,
  generateComprobationBalance,
} from "../../api/accountBookApi";

class Tables extends React.Component {
  constructor() {
    super();
    //const { cuentas } = props;
    const TData = generateMajorization(1).then((response) => {
      console.log("Entra: ", response);
    });

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1,
      prueba: [],
      balanzaComprobacion: {
        arrCuentas: [],
        totalCreditMov: 0,
        totalDebitMov: 0,
        totalCreditSald: 0,
        totalDebitSald: 0,
      },
    };
  }

  componentDidMount() {
    generateMajorization(1).then((response) => {
      console.log("Entró ", response);
      console.log("resp[0] ", response.data[0]);
      const arr = response.data.map(
        ({
          nameAccount,
          code,
          debit,
          credit,
          subtotalDebit,
          subtotalCredit,
          sectionAccount,
          total,
        }) => {
          const rows = [];
          let contDebe = 0;
          let contHaber = 0;
          while (
            debit[contDebe] !== undefined ||
            credit[contHaber] !== undefined
          ) {
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
          return {
            nameAccount,
            code,
            rows,
            subtotalDebit,
            subtotalCredit,
            sectionAccount,
            total,
          };
        }
      );
      this.setState({ prueba: arr });
      console.log("Estado: ", this.state);
    });
    generateComprobationBalance(1).then((response) => {
      if (!response.status || response.status !== "success") {
        console.log("Error Balanza de Comprobacion: ", response);
      }
      this.setState({
        balanzaComprobacion: {
          arrCuentas: response.data,
          totalCreditMov: response.totalCreditMov,
          totalDebitMov: response.totalDebitMov,
          totalCreditSald: response.totalCreditSald,
          totalDebitSald: response.totalDebitSald,
        },
      });
    });
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
          <Button color="primary" onClick={() => this.toggle(1)} size="md">
            Tablas T
          </Button>
          <Button color="primary" onClick={() => this.toggle(2)} size="md">
            Balanza de Comprobacion
          </Button>
          <Button color="primary" onClick={() => this.toggle(3)} size="md">
            Estado de Resultados
          </Button>
          <Button color="primary" onClick={() => this.toggle(4)} size="md">
            Balance General
          </Button>
        </Container>
        <Container fluid className="botones-impresion">
          <Button color="success" size="md">
            Exportar Excel
          </Button>
          <Button color="danger" size="md">
            Exportar PDF
          </Button>
        </Container>
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
                2: (
                  <BalanzaComprobacion data={this.state.balanzaComprobacion} />
                ),
                3: <EstadoResultado />,
                4: <BalanceGeneral />,
              }[this.state.activeTab]
            }
          </div>
        </Container>
      </>
    );
  }
}

export default Tables;
