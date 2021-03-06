//'use strict'
import React from 'react'
//importamos los componentes de Container, rows y col de reactstrap para un mayor estandar
import { Col } from 'reactstrap';
import Select from 'react-dropdown-select';


const options = [{label: 'SQL', value: 1}, 
                 {label: 'MongoDB', value: 2}];
export class StepTwo extends React.Component {
  constructor () {
    super()
    this.state = {
      conector: ''
    }
    this.handleConectorChanged = this.handleConectorChanged.bind(this);
  }

  handleConectorChanged (event) {
    this.setState({conector: event.target.value})
  }

  render () {
    return (
      <div>
        <Col xs="12">
          <Col xs="4">
            <label>Conector: </label>
          </Col>

          <Col xs="8">
            <Select options={options} className="WizardInput" onChange={(values) => this.setValues(values)} />        
          </Col>
        </Col>        
      </div>
    )
  }
}