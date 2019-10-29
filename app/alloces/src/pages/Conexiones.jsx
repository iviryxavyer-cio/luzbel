import React from 'react';
import '../App.css';
//importamos los componentes de Container, rows y col de reactstrap para un mayor estandar
import { Col } from 'reactstrap';
//import {Checkbox} from 'react-md';
//importamos los modales y los buttons
import {  ButtonToolbar, Button } from 'react-bootstrap';
//importamos los modales y los buttons
import {BootstrapTable, TableHeaderColumn, ref} from 'react-bootstrap-table';
//importamos el componente del modal agregar que creamos 
import FuncModalWizard from "../componentes/WizardConexiones.jsx";

import DataTableConexiones from "../componentes/DataTableConexiones.jsx";

//Clase principal de servidores, aqui nos armara la estructura principal de la vista servidores
function Conexiones() {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="Container" id="divServidores">
      <Col xs="12"> 
        <Col xs="10">
            <h1 className="text-center">CONEXIONES</h1>
        </Col>
        <Col xs="12">
          <Col xs="1">
            <label></label>
          </Col>
          <Col xs="8"> 
            <Col xs="12">
            <ButtonToolbar>
                <Button className="buttons boutton-crud Agregar" onClick={() => setModalShow(true)}>
                  Agregar
                </Button>
                <FuncModalWizard
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />

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

export default Conexiones;