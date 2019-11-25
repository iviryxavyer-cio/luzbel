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

class Conectores extends React.Component {
  
  constructor(props){
    super(props);
    this.props.dispatch(driversActions.getAllDrivers());
    this.crearConector = this.crearConector.bind(this)
    this.modificarDrivers = this.modificarDrivers.bind(this)
    this.cerrarModal = this.cerrarModal.bind(this)
    this.abrirModalRegistrar = this.abrirModalRegistrar.bind(this)
    this.abrirModalEditar = this.abrirModalEditar.bind(this)
  }
  //Función de registro del conector
  crearConector(datos){
    this.props.dispatch(driversActions.crearConector(datos));
  }
  //Funcion de modificado del conector
  modificarDrivers(datos){
    this.props.dispatch(driversActions.modificarDrivers(datos));
  }
  //Funcion para cerrar el modal y limpiar los props del mismo
  cerrarModal(){
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

  render() {
    return (
      <Container>
        <h1 className="text-center">Conectores</h1>
        <ButtonToolbar>
          <Button
            className="buttons boutton-crud Agregar"
            onClick={this.abrirModalRegistrar}>
              Agregar
            </Button>
            <Button
              className="buttons boutton-crud Eliminar">
                Eliminar
            </Button>
        </ButtonToolbar>
        <DataTableConectores 
          servers={this.props.conectores} 
          modificarDrivers={this.abrirModalEditar}
        />
      </Container>
    )
  }
}

export default connect((state)=>{

})(Conectores);
