import React from 'react';
import { connect } from "react-redux";
import MultiStep from '../Utilidades/MultiSteps';
import { Modal, Container } from 'react-bootstrap';
//acciones
import { serversActions } from "../actions/servidores.actions";

//steps
import { StepOne } from '../pages/StepOne';
import { StepTwo } from '../pages/StepTwo';
import { StepThree } from '../pages/StepThree';
import { StepFour } from '../pages/StepFour';


class FuncModalWizard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      server:null,
      usuario:"",
      contrasena:"",
      puerto:"",

      validacionPaso:{
        servidores:false,
      }
    };

    //dispatchs
    this.props.dispatch(serversActions.getAllServers());

    //bindings
    this.handleServerChange = this.handleServerChange.bind(this);
    this.handleUsuarioChange = this.handleUsuarioChange.bind(this);
    this.handleContrasenaChange = this.handleContrasenaChange.bind(this);
    this.handlePuertoChange = this.handlePuertoChange.bind(this);
  }

  handleServerChange(server){
    this.setState({
      server:server
    });
  }

  handleUsuarioChange(usuario){
    this.setState({
      usuario:usuario
    });
  }

  handleContrasenaChange(contrasena){
    this.setState({
      contrasena:contrasena
    });
  }

  handlePuertoChange(puerto){
    this.setState({
      puerto:puerto
    });
  }

  /**
   * funcion para validar el primer paso del wizard
   * @param {*} data 
   */
  validateStepOne(data){
    let resolution = false;
    switch (data) {
      case null:
        resolution = false;
        break;
      case undefined:
          resolution = false;
        break
      default:
        resolution = true;
        break;
    }
    return resolution;
  }

  validateStepTwo(data){
    let resolution = false;
  }


  render(){
    var steps = [
      {
        name: 'Servidores',
        component: 
          <StepOne 
            data={this.state}
            servers={this.props.servers}
            handleServerChange={this.handleServerChange}
            handleUsuarioChange={this.handleUsuarioChange}
            handleContrasenaChange={this.handleContrasenaChange}
            handlePuertoChange={this.handlePuertoChange}
          />,
        handleValidation: this.validateStepOne
      },
      {
        name: 'Conectores',
        component: 
          <StepTwo
            server={this.state.server}
          />,
        handleValidation: this.validateStepTwo
      },
      {name: 'BD',          component: <StepThree  />},
      {name: 'Resumen',     component: <StepFour  />}
    ]

    return(
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
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
            <MultiStep
              data={this.state}
              steps={steps}
              canNavigateInMenu={false}
            />
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