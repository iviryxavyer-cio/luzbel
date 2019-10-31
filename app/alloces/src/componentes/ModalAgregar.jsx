import React, { Component } from 'react';
import '../App.css';
import '../Generales.css';
import { Col } from 'reactstrap';
import { Modal, Button } from 'react-bootstrap';
import Servidores from '../pages/Servidores';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { serversActions } from '../actions/servidores.actions';
import { connect } from 'react-redux';


class FuncModalAgregar extends Component{

  constructor(props){
    super(props);
    this.getAllServers = this.getAllServers.bind(this)
    this.getAllServers()
  }

  getAllServers() {
    this.props.dispatch(serversActions.getAllServers())
  }

  render(){
    const { Servidores } = this.props
    console.log(Servidores);
    return(    
        <Modal
          {...this.props}
          size="lg" 
          aria-labelledby="contained-modal-title-vcenter" 
          centered 
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h4>Agregar Servidor</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Col xs="10" className="marginXS10 pos-left">
              <Col xs="3" className="pos-left">
                <label>IP/Dominio: </label>
              </Col>
              <Col xs="8" className="pos-left">
                <input 
                  name= "ip" 
                  type= "text"                 
                  className= "modalInput" 
                  id="ip" 
                  onChange = {(event, newValue) =>
                  this.setState({ip:newValue})}
                />
              </Col>
            </Col>

            <Col xs="10" className="marginXS10 pos-left">
              <Col xs="3" className="pos-left">
                <label>Nombre: </label>
              </Col>
              <Col xs="8" className="pos-left">
                <input 
                  name= "nombre" 
                  type= "text" 
                  className= "modalInput" 
                  id="nombre" 
                  onChange = {(event, newValue) =>
                  this.setState({nombre:newValue})}
                />
              </Col>
            </Col>

          </Modal.Body>
          <Modal.Footer>
          <Button className="Aceptar buttons buttonModal" onClick={(event) => this.handleClick(event)}>Aceptar</Button>
            <Button className="Eliminar buttons buttonModal" onClick={this.props.onHide}>Cancelar</Button>
          </Modal.Footer>
        </Modal>
      );
  }
}
function mapsPropsState(state){
  return {
    servidores: state.servidores
  }
}


export default connect(mapsPropsState)(FuncModalAgregar);