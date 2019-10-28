import React, { Component } from 'react';
import '../App.css';
import '../Generales.css';
import { Col } from 'reactstrap';
import { steps } from '../steps';
//import MultiStep from '../../node_modules/react-multistep2';
import MultiStep from '../../node_modules/react-multistep';
//import {Checkbox} from 'react-md';

import { Modal, Button } from 'react-bootstrap';

class FuncModalWizard extends Component{

constructor(props){
  super(props);
}

render(){
  return(
      <Modal
        {...this.props}
        size="lg" 
        aria-labelledby="contained-modal-title-vcenter" 
        centered 
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>WIZARD</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MultiStep steps={steps} />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }
}


export default FuncModalWizard;