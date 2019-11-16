import React from "react";
import { connect } from 'react-redux';
import { serversActions } from '../../../actions/servidores.actions';
import { modalAcciones } from '../../../actions/modal.actions';
import DataTableServidores from './DataTableServidores.jsx'
import { Container, ButtonToolbar, Button } from "react-bootstrap";
import ServidoresFormulario from './ServidoresFormulario';

class Servidores extends React.Component {
  constructor(props) {
    super(props)
    this.props.dispatch(serversActions.getAllServers())

    this.registrar = this.registrar.bind(this)
    this.modificar = this.modificar.bind(this)
    this.cerrarModal = this.cerrarModal.bind(this)
    this.abrirModalRegistrar = this.abrirModalRegistrar.bind(this)
  }

  registrar(datos){
    this.props.dispatch(serversActions.registrar(datos));
  }

  modificar(datos){
    this.props.dispatch(serversActions.modificar(datos));
  }

  cerrarModal() {
    this.props.dispatch(modalAcciones.limpiar());
  }

  abrirModalRegistrar() {
    const campos = <ServidoresFormulario
      onSubmit={this.registrar}
      cerrarModal={this.cerrarModal}
      labelBoton={'Aceptar'} />;
    
    const titulo = 'Creando Servidor';
    this.props.dispatch(modalAcciones.formulario({
      titulo,
      campos,
      tamanio: 'md'
    }))
  }

  render() {
    return (
      <Container>
        <h1 className="text-center">Servidores</h1>
        <ButtonToolbar>
          <Button
            className="buttons boutton-crud Agregar"
            onClick={this.abrirModalRegistrar}>
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