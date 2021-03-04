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
import { Link } from "react-router-dom";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import {ExcelFile, ExcelSheet} from "react-export-excel";
import {
  generateMajorization,
  generateComprobationBalance,
  generateStatementofIncome,
} from "../../api/accountBookApi";

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.state = {
      idEjercicio: id,
      activeTab: 1,
      datosTabla: [],
      balanzaComprobacion: {
        arrCuentas: [],
        totalCreditMov: 0,
        totalDebitMov: 0,
        totalCreditSald: 0,
        totalDebitSald: 0,
      },
      estadoResultados: [],
    };
  }

  componentDidMount() {
    generateMajorization(this.state.idEjercicio).then((response) => {
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

      //generateComprobationBalance
      generateStatementofIncome(this.state.idEjercicio).then((response) => {
        console.log('estado de ', response.data)
      })

      this.setState({ datosTabla: arr });
      console.log("Estado: ", this.state);
    });
    generateComprobationBalance(this.state.idEjercicio).then((response) => {
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
    generateStatementofIncome(this.state.idEjercicio).then((response) => {
      if (!response.status || response.status !== "success") {
        console.log("Error Estado de Resultados: ", response);
      }
      this.setState({
        estadoResultados: response.data,
      });
    });
  }
  

    exportToCSV = ( ) => {
        return(
          <ExcelFile>
                <ExcelSheet dataSet={this.state.balanzaComprobacion} name="Organization"/>
          </ExcelFile>
        )
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtension = '.xlsx';
        const ws = XLSX.utils.json_to_sheet({"balance": "$0.00"});
        const wb = { Sheets: { 'data': ws }, SheetNames: ['Balanza'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        console.log('excelBuffer', excelBuffer)
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, 'Balanza' + fileExtension);
    }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }

  render() {
    const { history } = this.props;
    return (
      <>
        <Header />
        <Container fluid className="botones-resultados">
          <Button
            color="primary"
            onClick={() =>
              history.push(`/admin/listar-partida/${this.state.idEjercicio}`)
            }
            size="md"
          >
            <i className="ni ni-bold-left"></i> Atrás
          </Button>
          <Button color="primary" onClick={() => this.toggle(1)} size="md">
            Cuentas T
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
          <Button color="success" size="md" 
          //onClick={() => console.log(this.state.balanzaComprobacion)}
          onClick={(e) => this.exportToCSV()}
          >
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
                1: this.state.datosTabla.map((datosTabla) => (
                  <TablaT
                    key={datosTabla.nameAccount + "tt"}
                    datosTabla={datosTabla}
                  />
                )),
                2: (
                  <BalanzaComprobacion data={this.state.balanzaComprobacion} />
                ),
                3: <EstadoResultado data={this.state.estadoResultados} />,
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
