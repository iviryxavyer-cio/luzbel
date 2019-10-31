import React from 'react';
import '../App.css';
//importamos los componentes de Container, rows y col de reactstrap para un mayor estandar
import { Container, Row, Col } from 'reactstrap';
//importamos los modales y los buttons
import {  ButtonToolbar, Button, Modal } from 'react-bootstrap';
//importamos el componente del modal agregar que creamos 
import FuncModalAgregar from "../componentes/ModalAgregar.jsx"

import DataTableConectores from "../componentes/DataTableConectores.jsx";



//Funcion principal de servidores, aqui nos armara la estructura principal de la vista servidores
function Conectores() {

const [modalShow, setModalShow] = React.useState(false);

  return (
    <div id="divServidores">
      <Col xs="12"> 
        <Col xs="12">
            <h1 className="text-center">CONECTORES</h1>
        </Col>
        <Col xs="12">
        <Col xs="1">
          <label></label>
        </Col>
        <Col xs="10"> 
          <Col xs="12">
          <ButtonToolbar>
              <Button className="buttons boutton-crud Agregar" onClick={() => setModalShow(true)}>
                Agregar
              </Button>

              <Button className="buttons boutton-crud Editar" id="Editar" disabled="disabled" onClick={ () => setModalShow(true) }>
                Editar
              </Button>

             <Button className="buttons boutton-crud Eliminar" id="Eliminar" disabled="disabled" onClick={ () => setModalShow(true) }>
                Eliminar
              </Button>
            </ButtonToolbar> 
              <FuncModalAgregar
                        show = { modalShow }
                        onHide = { () => setModalShow(false) }
              />           

          </Col>
          <Col xs="12">
            <DataTableConectores/>
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

export default Conectores;