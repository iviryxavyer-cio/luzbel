//'use strict'
import React from 'react';
//importamos los componentes de Container, rows y col de reactstrap para un mayor estandar
import { Col } from 'reactstrap';
import Select from 'react-dropdown-select';


/**
 * 
 const options = [
   {label: '10.1.1.18', value: 1}, 
   {label: '10.1.1.67', value: 2}
  ];
 */
export class StepOne extends React.Component {
  constructor () {
    super()
    this.state = { 
      servidor: '', 
      usuario: '',
      contrasenia: '',
      puerto: ''
    }
    this.handleServidorChanged = this.handleServidorChanged.bind(this);
    this.handleUsuarioChanged = this.handleUsuarioChanged.bind(this);
    this.handleContraseniaChanged = this.handleContraseniaChanged.bind(this);
    this.handlePuertoChanged = this.handlePuertoChanged.bind(this);
  }

  handleServidorChanged (event) {
    this.setState({servidor: event.target.value})
  }

  handleUsuarioChanged (event) {
    this.setState({usuario: event.target.value})
  }

  handleContraseniaChanged (event) {
    this.setState({Contrasenia: event.target.value})
  }

  handlePuertoChanged (event) {
    this.setState({Puerto: event.target.value})
  }

  extractServidores(){
    let serv = [];
    console.log(this.props);

    return serv;
  }

  render () {
    var servers = this.extractServidores();
    return (
      <div>
        <Col xs="12">

          <Col xs="4">
            <label>Servidor: </label>
          </Col>

          <Col xs="8">
            <Select 
              options={servers} 
              className="WizardInput" 
              onChange={(servidor) => this.setValues(servidor)} 
              />        
          </Col>

          <Col xs="4">
            <label>Usuario: </label>
          </Col>

          <Col xs="8">
            <input
              className='WizardInput' 
              placeholder='Usuario'
              type='text'
              onChange={this.handleUsuarioChanged}
              value={this.state.Usuario}
            />
          </Col>
        </Col>
        <Col xs="12">
          <Col xs="4">
            <label>Contraseña: </label>
          </Col>

          <Col xs="8">
            <input
              className='WizardInput' 
              placeholder='Contraseña'
              type='text'
              onChange={this.handleContraseniaChanged}
              value={this.state.Contrasenia}
            />
          </Col>
        </Col>

        <Col xs="12">
          <Col xs="4">
            <label>Puerto: </label>
          </Col>

          <Col xs="8">
            <input
              className='WizardInput' 
              placeholder='Puerto'
              type='text'
              onChange={this.handlePuertoChanged}
              value={this.state.Puerto}
            />
          </Col>
        </Col>
      </div>
    )
  }
}