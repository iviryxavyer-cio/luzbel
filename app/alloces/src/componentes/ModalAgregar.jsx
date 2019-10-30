import React, { Component } from 'react';
import '../App.css';
import '../css/Generales.css';
import { Col } from 'reactstrap';
//import {Checkbox} from 'react-md';

import { Modal, Button } from 'react-bootstrap';

class FuncModalAgregar extends Component{

constructor(props){
  super(props);
}

render(){
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
              <input className="modalInput" id="IP" />
            </Col>
          </Col>

          <Col xs="10" className="marginXS10 pos-left">
            <Col xs="3" className="pos-left">
              <label>Nombre: </label>
            </Col>
            <Col xs="8" className="pos-left">
              <input className="modalInput" id="nombre" />
            </Col>
          </Col>

        </Modal.Body>
        <Modal.Footer>
        <Button className="Aceptar buttons buttonModal" onClick={this.props.onHide}>Aceptar</Button>
          <Button className="Eliminar buttons buttonModal" onClick={this.props.onHide}>Cancelar</Button>
        </Modal.Footer>
      </Modal>
    );
}
}


export default FuncModalAgregar;