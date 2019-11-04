import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import '../../css/Generales.css';
import { Col } from 'reactstrap';
import { connect } from 'react-redux';
import { loginActions } from '../../actions/login.actions';
import { Form, Row, Col as Column, Button} from 'react-bootstrap'


//Clase que nos traera el Login
class Login extends Component {
  //constructor del login, cuenta con usuario y contraseña
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  //Evento
  submitForm(event) {
    event.preventDefault();
    this.props.dispatch(loginActions.login(this.state.username, this.state.password))
  }

  handleChange = async(event)=> {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [ name ]: value,
    });
  }

  render() {
    return (
      <Col xs="12">
        <Col xs="6">
          <img src={logo} className="App-Logo" alt="CAIN" />
        </Col>
        <Col xs="4">
          <Form className="Login-form" onSubmit={ (e) => this.submitForm(e)}>
            <Form.Group as={Row} controlId="formEmail">
              <Form.Label column sm={5}>
                Nombre de usuario
              </Form.Label>
              <Column sm={7}>
                <Form.Control type="text" 
                  placeholder="username"
                  value={this.state.username}
                  onChange={(e) => {this.handleChange(e)}} 
                  name="username"/>
              </Column>
            </Form.Group>
            <Form.Group as={Row} controlId="formPassword">
              <Form.Label column sm={5}>
                Contraseña
              </Form.Label>
              <Column sm={7}>
                <Form.Control type="password" 
                  placeholder="contraseña" 
                  value={this.state.password}
                  onChange={(e) => {this.handleChange(e)}} 
                  name="password"/>
              </Column>
            </Form.Group>
            <Form.Group as={Row} controlId="formControls">
              <Column sm={{span: 10, offset:3}}>
                <Button type="submit">Iniciar Sesion</Button>
              </Column>
            </Form.Group>
          </Form>
        </Col>        
      </Col>
    );
  }
}

function mapsPropsState(state) {
  return {
    authentication: state.authentication
  }
}

export default connect(mapsPropsState)(Login);

