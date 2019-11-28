import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

export class StepFour extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render () {
    //var basesDatos = this.state.currentValue.replace('\\n', '\n');
    return (
      <Container>
          <Row>
            <Col xs="3">  
              <label>Servidor: </label>
            </Col>
            <Col xs="9">
              <input
                className="form-control"
                type='text'
                disabled='disabled'
                value={`${this.props.data.server.direccion} | ${this.props.data.server.aliasServidor}`}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="3">
              <label>Usuario: </label>
            </Col>
            <Col xs="9">
              <input
                className='form-control'
                type='text'
                disabled='disabled'
                value={this.props.data.usuario}
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
                type='text'
                disabled='disabled'
                value={this.props.data.contrasena}
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
                type='text'
                disabled='disabled'
                value={this.props.data.puerto}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="3">
              <label>Conector: </label>
            </Col>
            <Col xs="9">
              <input 
                className='form-control'
                type='text'
                disabled='disabled'
                value={this.props.data.conector.nombreConector}
                />
            </Col>
          </Row>
          <Row>
            <Col xs="3">
              <label>Bases de Datos: </label>
            </Col>
            <Col xs="9">
              <input
              className='form-control'
              type="text"
              disabled='disabled'
              value={this.props.data.database.nombre}
              />
            </Col>
          </Row>

      </Container>
    )
  }
}