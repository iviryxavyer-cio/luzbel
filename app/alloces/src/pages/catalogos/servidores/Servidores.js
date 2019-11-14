import React from "react";
import { connect } from 'react-redux';
import { serversActions } from '../../../actions/servidores.actions';
import { modalAcciones } from '../../../actions/modal.actions';
import DataTableServidores from './DataTableServidores.jsx'
import { Container, ButtonToolbar, Button } from "react-bootstrap";

class Servidores extends React.Component {
  constructor(props) {
    super(props)
    this.props.dispatch(serversActions.getAllServers())


  }

  registrar(datos){
    this.props.dispatch(serversActions.registrar(datos));
  }

  modificar(datos){
    this.props.dispatch(serversActions.modificar(datos));
  }

  abrirModalRegistrar() {
    
  }

  render() {
    return (
      <Container>
        <h1 className="text-center">Servidores</h1>
        <ButtonToolbar>
          <Button
            className="buttons boutton-crud Agregar"
            onClick={e => console.log('agregar')}>
              Agregar
            </Button>
            <Button className="buttons boutton-crud Eliminar">
              Eliminar
            </Button>
        </ButtonToolbar>
        <DataTableServidores servers={this.props.servidores} />
      </Container>

    )
  }
}

function mapsPropsToState(state) {
  const { servidores } = state;

  return {
    servidores
  }
}

export default connect(mapsPropsToState)(Servidores);