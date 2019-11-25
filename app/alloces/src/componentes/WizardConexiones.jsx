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


class ModalWizard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      //paso 1
      server:null,
      usuario:"",
      contrasena:"",
      puerto:"",
      //paso 2
      conector:null,

      validacionPaso:{
        servidores:false,
      },

      conectores:[
        {
          idConector:1,
          nombreConector:"MS SQL",
          urlConector:"",
          status:"A",
        }
      ],
    };

    //dispatchs
    this.props.dispatch(serversActions.getAllServers());
    //yo habia ponido mis dispatch a conectores aqui

    //bindings
    this.handleServerChange = this.handleServerChange.bind(this);
    this.handleUsuarioChange = this.handleUsuarioChange.bind(this);
    this.handleContrasenaChange = this.handleContrasenaChange.bind(this);
    this.handlePuertoChange = this.handlePuertoChange.bind(this);
    this.handleConectorChange = this.handleConectorChange.bind(this);
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

  handleConectorChange(conector){
    this.setState({
      conector: conector
    });
  }

  handleTablaChange(tabla){
    this.setState({
      table: tabla
    });
  }

  /**
   * Debe validar el primer paso del wizard
   * relativo a la seleccion de servidor, usuario, contraseña, password y puerto
   * @param {*} data
   */
  validateStepOne(data){
    let resolution = false;
    if (data.server) {
      resolution = true;
    }
    return resolution;
  }

  /**
   * Debe validar validar que se seleccione conector y de ser asi
   * debe realizar la peticion para validar la conectividad con el servidor
   * @param {JSON} data 
   */
  validateStepTwo(data){
    let resolution = false;
    if (data.conector) {
      resolution = true;
    }
    console.log(data.conector);
    return resolution;
  }

  validateStepThree(data){
    let resolution = false;
    if (data.BD) {
      resolution = true;
    }
    return resolution;
  }

  validateFinal(data){
    let resolution = false;
    if (data) {
      resolution = true;
    }
    return resolution;
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
        name: 'DBMS',
        component: 
          <StepTwo
            data={this.state}
            conectores={this.props.conectores}
            handleConectorChange={this.handleConectorChange}
          />,
        handleValidation: this.validateStepTwo
      },
      {
        name: 'BD',
        component: 
          <StepThree
            data={this.state}
          />,
        handleValidation: this.validateStepThree
      },
      {
        name: 'Resumen',
        component: 
          <StepFour
            data={this.state}
          />,
        handleValidation: this.validateFinal
      }
    ]

    return(
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="xl" 
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
})(ModalWizard)