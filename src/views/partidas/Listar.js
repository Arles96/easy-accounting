import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Table,
} from "reactstrap";
import Header from "components/Headers/Header.js";
import ListarPartida from "components/partidas/ListarPartidas.js";

const testData = [
  {
    id: "1",
    idExercise: "1",
    number: "1",
    description: "A description",
    createdAt: "today",
    operationDate: "today",
    arrayCreditAccounts: [
      {
        idAccount: "3",
        numberAccount: "3",
        nameAccount: "Banco",
        money: 3,
        description: "A description 2",
      },
    ],
    arrayDebitAccounts: [
      {
        idAccount: "2",
        numberAccount: "2",
        nameAccount: "Banco2",
        money: 3,
        description: "A description 3",
      },
    ],
  },
  {
    id: "2",
    idExercise: "2",
    number: "2",
    description: "A description",
    createdAt: "today",
    operationDate: "today",
    arrayCreditAccounts: [
      {
        idAccount: "30",
        numberAccount: "30",
        nameAccount: "Banco",
        money: 3,
        description: "A description 2",
      },
    ],
    arrayDebitAccounts: [
      {
        idAccount: "20",
        numberAccount: "20",
        nameAccount: "Banco2",
        money: 3,
        description: "",
      },
    ],
  },
];

class Listar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partidas: testData,
    };
  }

  render() {
    return (
      <>
        <div>
          <Header />
          <Container className="mt--8" fluid>
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
