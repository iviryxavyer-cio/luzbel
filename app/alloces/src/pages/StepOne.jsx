import React from 'react';
//importamos los componentes de Container, rows y col de react-bootstrap para un mayor estandar
import { Col, Row, Container, FormLabel } from 'react-bootstrap';
import Select from 'react-select';


export class StepOne extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <Container>
        <Row>
          <Col xs="3">
            <FormLabel>Servidor:</FormLabel>
          </Col>

          <Col xs="9">
            <Select
              value={this.props.data.server}
              options={this.props.servers.allServers}
              className=""
              placeholder="Selecionar ..."
              onChange={(server)=>this.props.handleServerChange(server)}

              getOptionLabel={option => `${option.direccion} | ${option.aliasServidor}`}
              getOptionValue={option => option.idServidor}
            >
            </Select>
          </Col>

          <Col xs="3">
            <FormLabel>Usuario:</FormLabel>
          </Col>

          <Col xs="9">
            <input
              value={this.props.data.usuario}
              className='form-control' 
              placeholder='Usuario'
              type='text'
              onChange={(usuario)=>this.props.handleUsuarioChange(usuario.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="3">
            <FormLabel>Contraseña:</FormLabel>
          </Col>

          <Col xs="9">
            <input
              value={this.props.data.contrasena}
              className='form-control' 
              placeholder='Contraseña'
              type='text'
              onChange={(contrasena)=>this.props.handleContrasenaChange(contrasena.target.value)}
            />
          </Col>
        </Row>

        <Row>
          <Col xs="3">
            <FormLabel>Puerto:</FormLabel>
          </Col>

          <Col xs="9">
            <input
              value={this.props.data.puerto}
              className='form-control' 
              placeholder='Puerto'
              type='number'
              onChange={(puerto)=>this.props.handlePuertoChange(puerto.target.value)}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}