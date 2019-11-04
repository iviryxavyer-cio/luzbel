import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux';
//importamos los componentes de Container, rows y col de reactstrap para un mayor estandar
import { Container, Row, Col } from 'reactstrap'
//importamos los modales y los buttons
import { ButtonToolbar, Button } from 'react-bootstrap';
//importamos el componente del modal agregar que creamos 
import FuncModalAgregar from "../componentes/ModalAgregar.jsx";
import DataTableServidores from "../componentes/DataTableServidores.jsx";
import ModalGeneral from '../componentes/ModalGeneral';
import BotonAgregar from '../componentes/Buttons/botonAgregar.Buttons'
import BotonCancelar from '../componentes/Buttons/botonCancelar.Buttons'
import { tsPropertySignature } from '@babel/types';

//Funcion principal de servidores, aqui nos armara la estructura principal de la vista servidores
function Servidores() {

  const [modalShow, setModalShow] = React.useState(false);

    return (
      <div id="divServidores">
        <Col xs="12"> 
          <Col xs="12">
              <h1 className="text-center">SERVIDORES</h1>
          </Col>
          <Col xs="12">
          <Col xs="1">
            <label></label>
          </Col>
          <Col xs="10"> 
            <Col xs="12">
            <ButtonToolbar>
              <ModalGeneral
                clases="buttons boutton-crud Agregar"
                title="Agregar"
                cabecera="Agregar Servidor"
                contenido= { <FuncModalAgregar /> }
                footer= { 
                  <>
                    <BotonAgregar
                      funcion= { "alert()" }
                    /> 
                    <BotonCancelar
                     // function= { "Close()" }
                    />
                  </>
                }
              />
                <ModalGeneral
                clases="buttons boutton-crud Editar"
                title="Editar"
                cabecera="Editar Servidor"
                contenido='<Col xs="10" className="marginXS10 pos-left">
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
              </Col>'
              />
              <ModalGeneral
                clases="buttons boutton-crud Eliminar"
                title="Eliminar"
                cabecera="Elminar Servidor"
                contenido='¿Esta Seguro de que quiere continuar con la eliminación del registro?'
              />
            </ButtonToolbar>
            </Col>
            <Col xs="12">
              <DataTableServidores/>
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
export default Servidores;