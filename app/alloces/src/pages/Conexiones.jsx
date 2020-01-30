/**
 * @editor Marco A Gallegos
 * @date 19/11/2019
 * @description Este archivo se encuentra la vista principal del modulo de conexiones
 */
import React from 'react';
import { connect } from "react-redux";

//acciones para redux
import { conexionesActions } from "../actions/conexiones.actions"

//importamos los componentes de Container, rows y col de react-bootstrap para un mayor estandar
import { Col, ButtonToolbar, Button } from 'react-bootstrap';
//importamos el componente del modal agregar que creamos 
import FuncModalWizard from "../componentes/WizardConexiones";
import DataTableConexiones from "../componentes/DataTableConexiones";


//Clase principal de servidores, aqui nos armara la estructura principal de la vista servidores
class Conexiones extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      modalShow: false,
      conexionTabla:{},
    };

    //binding de funciones
    this.setModalShow = this.setModalShow.bind(this);
    this.handleRowSelection = this.handleRowSelection.bind(this);
    this.eliminarConexionSeleccionada = this.eliminarConexionSeleccionada.bind(this);
  }

  /**
   * Cambia el estado del modal
   * @param {bool} val para cambiar el estado del modal
   */
  setModalShow(val){
    this.setState({
      modalShow:val,
      conexionSeleccionada:{},
      puedeEliminar:false,
    });
  }

  /**
   * 
   * @param {JSON} row json elemeto unico de el array pasado como data a el componente (tabla)
   * @param {bool} isSelected regresa el estado del que provenia el componente es decir si al dar click estaba seleccionado o no
   * @param {JSON} e 
   */
  handleRowSelection(row, isSelected, e){
    if(isSelected){
      this.setState({
        conexionSeleccionada:row,
        puedeEliminar:true,
      });
    }else{
      this.setState({
        conexionSeleccionada:{},
        puedeEliminar:false
      });
    }
  }

  /**
   * Eliminar conexion seleccionada
   */
  eliminarConexionSeleccionada(){
    if (this.state.puedeEliminar) {
      this.props.dispatch(conexionesActions.deleteConexion(this.state.conexionSeleccionada.idConexion))
      this.setState({
        conexionSeleccionada:{},
        puedeEliminar:false
      });
    }
  }
  
  render(){
    let botonEliminar = null;

    if(this.state.puedeEliminar){
      botonEliminar =(
      <Button 
        className="buttons boutton-crud Eliminar"
        id="Eliminar"
        onClick={this.eliminarConexionSeleccionada}>
          Eliminar
      </Button>
      )
    }

    return (
      <div id="divServidores">
        <Col xs="12"> 
          <Col xs="12">
              <h1 className="text-center">CONEXIONES</h1>
          </Col>
          <Col xs="12">
            <Col xs="1">
              <label></label>
            </Col>
            <Col xs="10"> 
              <Col xs="12">
                <ButtonToolbar>
                  <Button className="buttons boutton-crud Agregar" onClick={() => this.setModalShow(true)}>
                    Agregar
                  </Button>
                  {botonEliminar}
                  <FuncModalWizard
                    show={this.state.modalShow}
                    hide={() => this.setModalShow(false)}
                  />
                </ButtonToolbar>
              </Col>
              <Col xs="12">
                <DataTableConexiones
                  handleRowSelection={this.handleRowSelection}
                />
              </Col>
            </Col>
            <Col xs="2">
              <label></label>
            </Col>
          </Col>
        </Col>
      </div>
    );
  }
}

//binding de redux con el componente
export default connect((state) => {
  return {
    //connections: state.connections
  }
})(Conexiones);