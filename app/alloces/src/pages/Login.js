import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../css/Generales.css';
import { Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import LoginService from '../services/login.service';
import {loginActions} from '../actions/login.actions'


//Clase que nos traera el Login
class Login extends Component {
//constructor del login, cuenta con usuario y contraseña
  constructor(props){
    super(props);
    this.state = {
        username:'',
        password:''
    }

    this.handleClick = this.handleClick.bind(this)
  }
//Evento
    handleClick(event){
      this.props.dispatch(loginActions.login(this.state.username, this.state.password))
    }

  render(){
    return (
      <Col xs="12">
          <Col xs="6"> 
            <img src={logo} className="App-Logo" alt="CAIN" />
          </Col>

          <Col xs="6" className={" fondo-azul login-components "}>
              <Col xs="6">
                  <label>Usuario: </label>
                  <br/>
                  <label>Contraseña: </label>
              </Col>

              <Col xs="4">
                  <input 
                    className="input-border" 
                    type="text" 
                    hitText= "Usuario"
                    floatingLabelText = "Username"
                    onChange = {(event, newValue) => 
                    this.setState({username:newValue})}
                  />

                  <br/>

                  <input 
                    className="input-border" 
                    type="password"
                    floatingLabelText = "Password"
                    onChange = {(event, newValue) =>
                    this.setState({password:newValue})}
                  />

                  <br/>

                  <button 
                    className="input-border buttons Ingresar" 
                    primary={true} 
                    onClick={(event) => this.handleClick(event)} >
                      Ingresar
                  </button>

                  <br/>

                  <a
                    className="" 
                    href=""
                  >
                        Registro
                  </a>
              </Col>
          </Col>
      </Col>
    );
  }
}

function mapsPropsState(state){
  return {
    authentication: state.authentication
  }
}

export default connect(mapsPropsState)(Login);

