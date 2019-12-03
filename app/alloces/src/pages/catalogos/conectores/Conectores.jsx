/**
 * @author JesusAlberto Briseño Camacho <jabc55@live.com>
 * @date 06/11/2019
 * @fileoverview Vista conectores
 * @version 1.0.0
 * 
 */
import React from "react";
import { connect } from 'react-redux';
import { driversActions } from '../../../actions/drivers.actions';
import { modalAcciones } from '../../../actions/modal.actions';
import DataTableConectores from './DataTableConectores';
import { Container, ButtonToolbar, Button } from 'react-bootstrap';
import ConectoresFormulario from './ConectoresFormulario';
import EliminarFormulario from '../../../componentes/comun/EliminarFormulario';

class Conectores extends React.Component {

  constructor(props) {
    super(props);
    this.props.dispatch(driversActions.getAllDrivers());
    this.state = { selectedRow: [] };
    this.crearConector = this.crearConector.bind(this);
    this.modificarDrivers = this.modificarDrivers.bind(this);
    this.cerrarModal = this.cerrarModal.bind(this);
    this.abrirModalRegistrar = this.abrirModalRegistrar.bind(this);
    this.abrirModalEditar = this.abrirModalEditar.bind(this);
    this.handleGetChildrenState = this.handleGetChildrenState.bind(this);
    this.eliminarSeleccionados = this.eliminarSeleccionados.bind(this);
    this.abrirModalEliminarSeleccion = this.abrirModalEliminarSeleccion.bind(this);
  }
  //Función de registro del conector
  crearConector(datos) {
    this.props.dispatch(driversActions.crearConector(datos));
  }
  //Funcion de modificado del conector
  modificarDrivers(datos) {
    this.props.dispatch(driversActions.modificarDrivers(datos));
  }
  //Funcion para cerrar el modal y limpiar los props del mismo
  cerrarModal() {
    this.props.dispatch(modalAcciones.limpiar());
  }
  //Funcion para abrir el modal de registro y agregar el formulario de los conectores
  abrirModalRegistrar() {
    const campos = <ConectoresFormulario
      onSubmit={this.crearConector}
      cerrarModal={this.cerrarModal}
      labelBoton={'Aceptar'}
    />;
    const titulo = 'Creando Conector';
    this.props.dispatch(modalAcciones.formulario({
      titulo,
      campos,
      tamanio: 'md'
    }))
  }
  //Funcion para abrir el modal de edición y agregar el formulario de los conectores
  abrirModalEditar(datosFormulario) {
    const campos = <ConectoresFormulario
      onSubmit={this.modificarDrivers}
      cerrarModal={this.cerrarModal}
      datos={datosFormulario}
      labelBoton={'Aceptar'}
      eliminar={'1'}
    />
    const titulo = 'Modificar conector';
    this.props.dispatch(modalAcciones.formulario({
      titulo,
      campos,
      tamanio: 'md'
    }));
  }
  //
  abrirModalEliminarSeleccion() {
    const campos = <EliminarFormulario
      onSubmit={this.eliminarSeleccionados}
      datos={this.state.selectedRow}
      cerrar={this.cerrarModal}
      mensaje={'¿Seguro que quieres eliminar los conectores seleccionados?'}
      botonTitulo={'Aceptar'}
    />
    const titulo = 'Eliminar conectores';
    this.props.dispatch(modalAcciones.formulario({ titulo, campos, tamanio: 'md' }))
  }
  //
  handleGetChildrenState(data){
    //this.state.selectedRow = [...data]
    this.setState({
      selectedRow:[...data]
    });
  }
  //
  eliminarSeleccionados(datos) {
    this.props.dispatch(driversActions.eliminarSeleccionados(datos))
  }

  render() {
    const { conectores } = this.props;
    return (
      <Container>
        <h1>Catálogo de Conectores</h1>
        <h2 className="text-center">Conectores</h2>
        <ButtonToolbar>
          <Button
            className="buttons boutton-crud Agregar"
            onClick={this.abrirModalRegistrar}>
            Agregar
            </Button>
          <Button
            className="buttons boutton-crud Eliminar"
            onClick={this.abrirModalEliminarSeleccion}>
            Eliminar
            </Button>
        </ButtonToolbar>
        <DataTableConectores
          servers={conectores}
          modificarDrivers={this.abrirModalEditar}
          onChange={this.handleGetChildrenState}
        />
      </Container>
    )
  }
}

function mapsPropsToState(state) {
  const { Conectores } = state

  return {
    Conectores
  }
}

export default connect(mapsPropsToState)(Conectores);
