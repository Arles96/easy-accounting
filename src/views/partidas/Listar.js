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
      idEjercicio: id,
      numPartida: 1
    };
  }

  componentDidMount() {
    
    getAccountsOperations(this.state.idEjercicio)
      .then((res) => {
        this.setState({ partidas: res.data });
        if(res.data){
          let mayor = this.getGreaterThan(res.data)
          this.setState({numPartida: parseInt(mayor) + 1})
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getGreaterThan(partidas) {
    let mayor = 1;
    partidas.forEach(partida => {
      if(partida.number > mayor){
        mayor = partida.number;
      }
    });
    return mayor;
  }

  render() {
    const { history } = this.props;
    return (
      <>
        <div>
          <Header />
          <Container responsive className="botones-resultados">
            <Button
              color="default"
              onClick={() =>
                history.push(
                  `/admin/partidas/${this.state.idEjercicio}/${this.state.numPartida}`
                )
              }
              size="med"
            >
              Añadir Partida
            </Button>
            <Button
              color="default"
              onClick={() =>
                history.push(
                  `/admin/resultados/${this.state.idEjercicio}`
                )
              }
              size="med"
            >
              Mostrar Resultados
            </Button>
          </Container>

          <Container responsive className="mt--5" fluid>
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
