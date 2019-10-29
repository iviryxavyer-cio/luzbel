import React from 'react'
import { Col } from 'reactstrap';
export class StepFour extends React.Component {
  constructor () {
    super()
    this.state = { 
      checked: '' 
    }
    this.handleCheckedChanged = this.handleCheckedChanged.bind(this);
  }

  handleCheckedChanged (event) {
    this.setState({checked: event.target.checked})
  }

  render () {
    //var basesDatos = this.state.currentValue.replace('\\n', '\n');
    return (
      <div>
          <Col xs="12">
            <Col xs="4">  
              <label>Servidor: </label>
            </Col>
            <Col xs="8">
              <input
                className="WizardInput"
                //value={$X}
                type='text'
                disabled='disabled'
              />
            </Col>
          </Col>
          <Col xs="12">
            <Col xs="4">
              <label>Usuario: </label>
            </Col>
            <Col xs="8">
              <input
                className='WizardInput'
                type='text'
                disabled='disabled'
                //value={$value}
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
                type='text'
                disabled='disabled'
                //value={$Value}
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
                type='text'
                disabled='disabled'
                //value={$Value}
              />
            </Col>
          </Col>
          <Col xs="12">
            <Col xs="4">
              <label>Conector: </label>
            </Col>
            <Col xs="8">
              <input 
                className='WizardInput'
                type='text'
                disabled='disabled'
                //value={$Value}
              />
            </Col>
          </Col>
          <Col xs="12">
            <Col xs="4">
              <label>Bases de Datos: </label>
            </Col>
            <Col xs="8">
              <textarea value={this.state.value} 
              className='WizardInput'
              onChange={this.handleChange} 
              rows={5} 
              disabled='disabled'
              />
            </Col>
          </Col>

      </div>
    )
  }
}