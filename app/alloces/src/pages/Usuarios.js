import React from 'react'
import '../App.css'
import { Col } from 'reactstrap'
import { ButtonToolbar, Button } from 'react-bootstrap'
import DataTableUsuarios from '../componentes/DataTableUsuarios'

function Usuarios(){
    
    return (
        <div id="divUsuarios">
            <Col xs="12">
                <Col xs="12">
                    <h1 className="text-center">USUARIOS</h1>
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
                                <Button className="buttons boutton-crud Editar" onClick={() => setModalShow(true)}>
                                    Editar
                                </Button>
                                <Button className="buttons boutton-crud Eliminar" onClick={() => setModalShow(true)}>
                                    Eliminar
                                </Button>
                            </ButtonToolbar>
                        </Col>
                        <Col xs="12">
                            <DataTableUsuarios/>
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
export default Usuarios;