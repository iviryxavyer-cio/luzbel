import React from 'react';
//importamos los componentes de Container, rows y col de reactstrap para un mayor estandar
import { Col, Row, Container } from 'react-bootstrap';
import Select from 'react-select';


export class StepOne extends React.Component {
  constructor () {
    super()
    this.state = { 
      servidor: '', 
      usuario: '',
      contrasenia: '',
      puerto: ''
    }
  }

  /**
   * regresar array con datos representables por el componente Select
   */
  extractServidores(){
    let servers = [];
    this.props.servers.allServers.map((servidor)=>{
      servers.push({
        value: servidor.idServidor,
        label: `${servidor.direccion} | ${servidor.aliasServidor}`
      })
    })
    console.log(servers)
    return servers;
  }

  render () {
    var servers = this.extractServidores();
    return (
      <Container>
        <Row>

          <Col xs="3">
            <label>Servidor: </label>
          </Col>

          <Col xs="9">
            <Select
              options={this.extractServidores()}
              className=""
              
            >
            </Select>
          </Col>

          <Col xs="3">
            <label>Usuario: </label>
          </Col>

          <Col xs="9">
            <input
              className='form-control' 
              placeholder='Usuario'
              type='text'
              onChange={this.handleUsuarioChanged}
              value={this.state.Usuario}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="3">
            <label>Contraseña: </label>
          </Col>

          <Col xs="9">
            <input
              className='form-control' 
              placeholder='Contraseña'
              type='text'
              onChange={this.handleContraseniaChanged}
              value={this.state.Contrasenia}
            />
          </Col>
        </Row>

        <Row>
          <Col xs="3">
            <label>Puerto: </label>
          </Col>

          <Col xs="9">
            <input
              className='form-control' 
              placeholder='Puerto'
              type='text'
              onChange={this.handlePuertoChanged}
              value={this.state.Puerto}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}