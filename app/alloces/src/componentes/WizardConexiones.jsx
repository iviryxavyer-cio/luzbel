import React from 'react';
import { connect } from "react-redux";
import MultiStep from '../Utilidades/MultiSteps';
import { Modal, Container } from 'react-bootstrap';
//acciones
import { serversActions } from "../actions/servidores.actions";
import { conexionesActions } from '../actions/conexiones.actions';
import { driversActions } from "../actions/drivers.actions";

//querys graphql
import { QueryValidaciones } from "../graphql/validaciones";

//steps
import { StepOne } from '../pages/StepOne';
import { StepTwo } from '../pages/StepTwo';
import { StepThree } from '../pages/StepThree';
import { StepFour } from '../pages/StepFour';

/**
 * Componente para renderizar un form-wizard
 */
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
      validacionConexion:{
        cargando:true,
        error:false,
        errorData:"",
      },
      databases:[],
      //paso 3
      database:"",
    };

    //dispatch para obtener state global
    this.props.dispatch(serversActions.getAllServers());
    this.props.dispatch(driversActions.getAllDrivers());

    //bindings para acceder a state local
    this.handleServerChange = this.handleServerChange.bind(this);
    this.handleUsuarioChange = this.handleUsuarioChange.bind(this);
    this.handleContrasenaChange = this.handleContrasenaChange.bind(this);
    this.handlePuertoChange = this.handlePuertoChange.bind(this);
    this.handleConectorChange = this.handleConectorChange.bind(this);
    this.handleDatabaseChange = this.handleDatabaseChange.bind(this);
    this.validateStepTwo = this.validateStepTwo.bind(this);
    this.validateFinal = this.validateFinal.bind(this);
    this.resetWizardSate = this.resetWizardSate.bind(this);
  }

  // funcion para modificar el servidor seleccionado en algun paso del wizard
  handleServerChange(server){
    this.setState({
      server:server
    });
  }
  
  // funcion para modificar el usuario seleccionado en algun paso del wizard
  handleUsuarioChange(usuario){
    this.setState({
      usuario:usuario
    });
  }

  // funcion para modificar la contraseña seleccionada en algun paso del wizard
  handleContrasenaChange(contrasena){
    this.setState({
      contrasena:contrasena
    });
  }
  
  // funcion para modificar el puerto seleccionado en algun paso del wizard
  handlePuertoChange(puerto){
    this.setState({
      puerto:puerto
    });
  }
  
  // funcion para modificar el conector seleccionado en algun paso del wizard
  handleConectorChange(conector){
    this.setState({
      conector: conector
    });
  }
  
  // funcion para modificar la tabla seleccionada en algun paso del wizard
  handleTablaChange(tabla){
    this.setState({
      table: tabla
    });
  }
  
  // funcion para modificar la tabla seleccionada en algun paso del wizard
  handleDatabaseChange(database){
    this.setState({
      database: database
    });
  }

  /**
   * Debe validar el primer paso del wizard
   * relativo a la seleccion de servidor, usuario, contraseña, password y puerto
   * @param {*} data es el state de this (Modalwizard)
   */
  validateStepOne(data){
    let resolution = false;
    if (data.server && data.puerto.trim() !== "") {
      resolution = true;
    }
    return resolution;
  }

  /**
   * Debe validar validar que se seleccione conector y de ser asi
   * debe realizar la peticion para validar la conectividad con el servidor
   * @param {JSON} data es el state de this (Modalwizard)
   */
  validateStepTwo(data){
    if (data.conector) {
      let requestData = {
        idServidor: this.state.server.idServidor,
        idConector: this.state.conector.idConector,
        usuario: this.state.usuario,
        contrasena: this.state.contrasena,
        puerto: this.state.puerto,
      };
      window.graphqlRequest(window.config.api.url("validacion"), QueryValidaciones.validacion(requestData))
      .then(response=>{
        switch (response.validacion.status) {
          case true:
            this.setState({
              validacionConexion:{
                cargando:false,
                error:false,
                errorData:"",
              },
              databases:response.validacion.data
            });
            break;
          case false:
            this.setState({
              validacionConexion:{
                cargando:false,
                error:true,
                errorData: response.validacion.error
              },
              databases:[]
            });
            break;
          default:
            break;
        }

        console.log(response.validacion);
      }).catch(err=>{
        this.setState({
          validacionConexion:{
            cargando:false,
            error:true,
            errorData: "ALgo inesperado salio mal :C"
          },
          databases:[]
        });
      });
      return true;
    }else{
      return false;
    }
  }

  /**
   * Debe validar que se selecciono alguna base de datos
   * @param {JSON} data es el state de this -> (Modalwizard)
   */
  validateStepThree(data){
    let resolution = false;
    if (data.database.nombre) {
      resolution = true;
    }
    return resolution;
  }

  /**
   * esta funcion se ejecuta al final del wizard y debe
   * - crear en api
   * - cerrar modal cuando este proceso finalice
   * - limpiar el state
   */
  validateFinal(){
    console.log("conector ",this.state.conector.idConector);
    let dataToStore = {
      idConector:         this.state.conector.idConector,
      idServidor:         this.state.server.idServidor,
      usuario:            this.state.usuario,
      contrasena:         this.state.contrasena,
      puerto:             this.state.puerto,
    }
    this.props.dispatch(conexionesActions.storeConexion(dataToStore));
    this.props.hide();
    this.resetWizardSate();
  }

  /**
   * Limpiar el state relacionado con el wizard
   */
  resetWizardSate(){
    this.setState({
      //paso 1
      //server:null,
      usuario:"",
      contrasena:"",
      puerto:"",
      //paso 2
      //conector:null,
      validacionConexion:{
        cargando:true,
        error:false,
        errorData:"",
      },
      databases:[],
      //paso 3
      database:"",
    });
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
            conectores={this.props.drivers.allDrivers.conectores}
            handleConectorChange={this.handleConectorChange}
          />,
        handleValidation: this.validateStepTwo
      },
      {
        name: 'BD',
        component: 
          <StepThree
            data={this.state}
            databases={this.state.databases}
            cargando={this.state.validacionConexion.cargando}
            error={this.state.validacionConexion.error}
            errorData={this.state.validacionConexion.errorData}
            handleDatabaseChange={this.handleDatabaseChange}
          />,
        handleValidation: this.validateStepThree
      },
      {
        name: 'Resumen',
        component:
          <StepFour
            data={this.state}
          />,
        handleSuccess: this.validateFinal
      }
    ]

    return(
      <Modal
        show={this.props.show}
        onHide={this.props.hide}
        size="xl" 
        aria-labelledby="contained-modal-title-vcenter" 
        centered 
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="animated bounce infinite">
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

export default connect((state) => {
  return {
    servers: state.servers,
    drivers: state.drivers,
  }
})(ModalWizard)