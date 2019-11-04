import React from 'react';
import logo from '../logo.svg';
import '../App.css';
//importamos los componentes de Container, rows y col de reactstrap para un mayor estandar
import { Container, Row, Col } from 'reactstrap';
//import {Checkbox} from 'react-md';
//importamos los datatable para su utilizaciones
import { BootstrapTable, TableHeaderColumn, ref } from 'react-bootstrap-table';
//importamos los modales y los buttons
import { ButtonToolbar, Button } from 'react-bootstrap';
//importamos el componente del modal agregar que creamos 
import FuncModalAgregar from "../componentes/ModalAgregar.jsx";

import DataTableServidores from "../componentes/DataTableServidores.jsx";

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
                <Button className="buttons boutton-crud Agregar" onClick={() => setModalShow(true)}>
                  Agregar
              </Button>
                <FuncModalAgregar
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />

                <Button className="buttons boutton-crud Editar" id="Editar" disabled="disabled" onClick={() => setModalShow(true)}>
                  Editar
              </Button>
                {/*<FuncModalAgregar
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />*/}

                <Button className="buttons boutton-crud Eliminar" id="Eliminar" disabled="disabled" onClick={() => setModalShow(true)}>
                  Eliminar
              </Button>
                {/*<FuncModalAgregar
                show={modalShow}
                onHide={() => setModalShow(false)}
              />*/}
              </ButtonToolbar>
            </Col>
            <Col xs="12">
              <DataTableServidores />
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