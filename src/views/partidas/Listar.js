import React from "react";
import { Container, Button } from "reactstrap";
import Header from "components/Headers/Header.js";
import ListarPartida from "components/partidas/ListarPartidas.js";
import { getAccountsOperations } from "../../api/accountBookApi";



class Listar extends React.Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.state = {
      partidas: [],
      idEjercicio: id
    };
  }

  componentDidMount() {
    
    getAccountsOperations(this.state.idEjercicio)
      .then((res) => {
        console.log("EL RES", res.data);
        this.setState({ partidas: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {

    return (
      <>
        <div>
          <Header />
          <Container className="mt--8" fluid>
          <Button
              color="default"
              href={`/admin/partidas/${this.state.idEjercicio}`}
              size="med"
            >
              Añadir Partida
            </Button>
            <Button
              color="default"
              href={`/admin/resultados/${this.state.idEjercicio}`}
              size="med"
            >
              Mostrar Resultados
            </Button>
            {this.state.partidas.map((partida) => (
              <ListarPartida partida={partida} />
            ))}
            <br></br>

          </Container>
        </div>
      </>
    );
  }
}

export default Listar;
