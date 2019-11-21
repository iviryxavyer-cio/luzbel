import React from 'react';
//importamos los componentes de Container, rows y col de react-bootstrap para un mayor estandar
import { Col, Row, Container } from 'react-bootstrap';
import Select from 'react-select';


export class StepOne extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
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
    return servers;
  }

  handleServerChange(server){
    this.props.handleServerChange(server);
  }

  render () {
    return (
      <Container>
        <Row>
          <Col xs="3">
            <label>Servidor: </label>
          </Col>

          <Col xs="9">
            <Select
              value={this.state.server}
              options={this.extractServidores()}
              className=""
              onChange={(server)=>this.handleServerChange(server)}
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
              onChange={(usuario)=>this.props.handleUsuarioChange(usuario.target.value)}
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
              onChange={(contrasena)=>this.props.handleContrasenaChange(contrasena.target.value)}
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
              onChange={(puerto)=>this.props.handlePuertoChange(puerto.target.value)}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}