import React from 'react';
import logo from '../logo.svg';
import '../App.css';
//importamos los componentes de Container, rows y col de reactstrap para un mayor estandar
import { Container, Row, Col } from 'reactstrap';
//import {Checkbox} from 'react-md';
//importamos los datatable para su utilizaciones
import {BootstrapTable, TableHeaderColumn, ref} from 'react-bootstrap-table';
//importamos los modales y los buttons
import {  ButtonToolbar, Button } from 'react-bootstrap';
//importamos el componente del modal agregar que creamos 
import FuncModalAgregar from "../componentes/ModalAgregar.jsx"

import DataTableConectores from "../componentes/DataTableConectores.jsx";

//Funcion principal de servidores, aqui nos armara la estructura principal de la vista servidores
function Conectores() {
//Variable que contiene los campos de prueba       
  const data = [{nombre: 'SQL', url: 'SDASQLS'},
                {nombre: 'MONGODB', url: 'MONDBADB'},
                {nombre: 'MYSQL', url: 'MSDASQL'}];
//Variable de tipo arreglo que contiene los campos y encabezados de la DataTable            
  const columns = [{name: 'Nombre', selector: 'nombre', sortable: true,},
                   {name: 'URL', selector: 'url', sortable:true, right: true,}
                  ];

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="Container" id="divServidores">
      <Col xs="12"> 
        <Col xs="10">
            <h1 className="text-center">CONECTORES</h1>
        </Col>
        <Col xs="12">
        <Col xs="2" className={"pos-left"}>
          <label></label>
        </Col>
        <Col xs="8"> 
          <Col xs="8">
            <DataTableConectores/>
          </Col>
          <Col xs="4">
            <Col xs="6" className="controller-crud">
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
            {/*  <FuncModalAgregar
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