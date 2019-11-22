import React from 'react';
import { connect } from "react-redux";
import MultiStep from '../Utilidades/MultiSteps';
import { Modal, Container } from 'react-bootstrap';
//acciones
import { serversActions } from "../actions/servidores.actions";

//steps
/*import { StepOne } from '../pages/StepOne';
import { StepTwo } from '../pages/StepTwo';
import { StepThree } from '../pages/StepThree';
import { StepFour } from '../pages/StepFour';*/


class FuncModalWizard extends React.Component {

constructor(props){
  super(props);
  this.state = {
    servidor:null,
  };

  //dispatchs
  this.props.dispatch(serversActions.getAllServers());

  //bindings
  this.handleServerChange = this.handleServerChange.bind(this);
}

handleServerChange(){
  alert("ok");
}

render(){
  /*var steps = [
    {name: 'Servidores',  component: <StepOne servers={this.props.servers} handleChnage={this.handleServerChange} />},
    {name: 'Conectores',  component: <StepTwo/>},
    {name: 'BD',          component: <StepThree/>},
    {name: 'Resumen',     component: <StepFour/>}
  ]*/
  var steps =[]
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
          <Container>
            <MultiStep steps={steps} />
          </Container>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }
}


//export default FuncModalWizard;

export default connect((state) => {
  return {
    servers: state.servers
  }
})(FuncModalWizard)