/**
 * @editor Marco A Gallegos
 * @date 19/11/2019
 * @description Este archivo se encuentra la vista principal del modulo de conexiones
 */
import React from 'react';
import { connect } from "react-redux";

//acciones para redux
//import { conexionesActions } from "../actions/conexiones.actions"

//importamos los componentes de Container, rows y col de react-bootstrap para un mayor estandar
import { Col, ButtonToolbar, Button } from 'react-bootstrap';
//importamos el componente del modal agregar que creamos 
import FuncModalWizard from "../componentes/WizardConexiones.jsx";
import DataTableConexiones from "../componentes/DataTableConexiones";


//Clase principal de servidores, aqui nos armara la estructura principal de la vista servidores
class Conexiones extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      modalShow: false
    };

    //binding de funciones
    this.setModalShow = this.setModalShow.bind(this);

    //dispatch
    //this.props.dispatch(conexionesActions.getAllConexiones());
  }

  setModalShow(val){
    this.setState({
      modalShow:val
    });
  }
  
  render(){
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
                  <FuncModalWizard
                    show={this.state.modalShow}
                    onHide={() => this.setModalShow(false)}
                  />
  
                  <Button className="buttons boutton-crud Eliminar" id="Eliminar" disabled="disabled" onClick={() => this.setModalShow(true)}>
                      Eliminar
                  </Button>
                </ButtonToolbar>
              </Col>
              <Col xs="12">
                <DataTableConexiones/>
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