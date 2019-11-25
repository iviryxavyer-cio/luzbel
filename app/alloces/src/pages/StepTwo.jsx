//'use strict'
import React from 'react'
//importamos los componentes de Container, rows y col de react-bootstrap para un mayor estandar
import { Col, Row, Container } from 'react-bootstrap';
import Select from 'react-select';


const options = [
  {label: 'SQL', value: 1},
  {label: 'MongoDB', value: 2}
];
export class StepTwo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <Container>
        <Row>
          <Col xs="4">
            <label>Tipo De DBM: </label>
          </Col>

          <Col xs="8">
            <Select
              options={options}
              placeholder="Seleccionar ..."
              onChange={(conector) => this.props.handleConectorChange(conector)}
            />        
          </Col>
        </Row>        
      </Container>
    )
  }
}