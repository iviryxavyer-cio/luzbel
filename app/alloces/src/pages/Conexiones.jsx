import React from 'react';
// redux
import { connect } from "react-redux";

//acciones para redux
import { serversActions } from "../actions/servidores.actions";
import { connectionsActions } from "../actions/conexiones.actions"

//importamos los componentes de Container, rows y col de reactstrap para un mayor estandar
import { Col } from 'reactstrap';
import {  ButtonToolbar, Button } from 'react-bootstrap';
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

    //dispatchs
    this.props.dispatch(serversActions.getAllServers());


    //binding de funciones
    this.setModalShow = this.setModalShow.bind(this);
    this.ok = this.ok.bind(this);
  }

  setModalShow(val){
    this.setState({
      modalShow:val
    });
  }

  ok(){
    console.log(this.props.servers.allServers);
  }
  
  render(){
    //const servidores = this.props;

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
                  <Button onClick={() => this.ok()} >Hola</Button>
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

//export default Conexiones;
export default connect((state) => {
  return {
    servers: state.servers
  }
})(Conexiones);