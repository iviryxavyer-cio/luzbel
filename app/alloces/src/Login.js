import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Generales.css';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
//Clase que nos traera el Login
class Login extends Component {
//constructor del login, cuenta con usuario y contraseña
  constructor(props){
    super(props);
    this.state = {
        username:'',
        password:''
    }
  }

    handleClick(event){
      var apiBaseUrl = "http://localhost:4000/api/";
      var self = this;
      var payload = {
        "username":this.state.username,
        "password":this.state.password
      };
      axios.post(apiBaseUrl+'login', payload)
      .then(function (response) {
        console.log(response);
        if (response.data.code == 200){
          console.log("LoginSuccessfull");
          /*var uploadScreen = [];
          self.props.appContext.setState({loginPage:[], uploadScreen:uploadScreen})*/
          return <Redirect  
                    to = '/componentes/DataTableConectores'
                  />
        }
        else if (response.data.code == 204){
          console.log("Usuario o contraseña no coinciden");
          alert("Usuario o contraseña no coinciden");
        }
        else {
          console.log("Usuario no existe");
          alert("Usuario no existe");
        }
      })
      .catch(function (error){
        console.log(error);
      });
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
                    className="input-border buttons" 
                    primary={true} 
                    onClick={(event) => this.handleClick(event)} >
                      Ingresar
                  </button>

                  <br/>

                  <button 
                    className="input-border buttons" 
                  >
                        Registro
                  </button>
              </Col>
          </Col>
      </Col>
    );
  }
}

export default Login;

