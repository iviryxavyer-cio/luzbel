import React, { Component } from 'react';
import '../App.css';
import '../css/Generales.css';
import { Col } from 'react-bootstrap';
//import { showModal, hideModal } from '../actions/modal.actions';
//import { connect } from 'react-redux';


class FuncModalAgregar extends Component{
  render(){
    //const { Servidores } = this.props
    
    return(   
      <> 
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
      </>
    );
  }
}

export default FuncModalAgregar;