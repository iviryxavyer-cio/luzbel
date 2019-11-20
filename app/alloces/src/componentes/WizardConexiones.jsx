import React from 'react';

import MultiStep from '../Utilidades/MultiSteps';
import { Modal } from 'react-bootstrap';

//steps
import { StepOne } from '../pages/StepOne';
import { StepTwo } from '../pages/StepTwo';
import { StepThree } from '../pages/StepThree';
import { StepFour } from '../pages/StepFour';


class FuncModalWizard extends React.Component {

constructor(props){
  super(props);

}

render(){

  var steps = [
    {name: 'Servidores', component: <StepOne/>},
    {name: 'Conectores', component: <StepTwo/>},
    {name: 'BD', component: <StepThree/>},
    {name: 'Resumen', component: <StepFour/>}
  ]


  return(
      <Modal
        {...this.props}
        size="lg" 
        aria-labelledby="contained-modal-title-vcenter" 
        centered 
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>Cadena Conexion</h4>
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