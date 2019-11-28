/**
 * @editor Marco A Gallegos
 * @date 27/11/2019
 * @description archivo que renderiza el formulario para poder seleccionar una db
 */
import React from 'react';
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
//import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import Select from "react-select";
import { Container, Col, Row } from "react-bootstrap";


export class StepThree extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }

    //binding
    this.convertResponse = this.convertResponse.bind(this);
  }

  //convertir el arreglo de strings a arreglo de json's
  convertResponse(){
    let arr = [];
    this.props.databases.map(database=>{
      arr.push({
        nombre: database
      });
      // solo para evadir warning
      return true;
    });
    return arr;
  }

  render () {
    let view = null;

    if (this.props.cargando) {
      view = (
        <h2 className="text-center" >Cargando</h2>
      )
    }else{
      if(this.props.error){
        view = (
          <>
            <h2>Errores de conexion</h2>
            <p>{ this.props.errorData }</p>
          </>
        )
      }else{
        view = (
          <Container>
            <Row>
              <Col xs="12">
                <h2>Selecciona alguna de las bases de datos</h2>
              </Col>
              <Col xs="12" >
                <label>Base de datos:</label>
              </Col>
              <Col xs="12">
                <Select
                  value={this.props.data.database}
                  options={this.convertResponse()}
                  placeholder="Seleccionar ..."
                  onChange={(database) => this.props.handleDatabaseChange(database)}

                  getOptionLabel={option => option.nombre}
                  getOptionValue={option => option.nombre}
                >
                </Select>
              </Col>
            </Row>
          </Container>
        )
      }
    }

    return (
      <div className="py-2" >
        {view}
      </div>
    );
  }
}

// seteamos valo por defecto a props que implican cambio en render
StepThree.defaultProps ={
  cargando:     true,
  error:        false,
  errorData:    "",
  databases:    [],
  handleDatabaseChange: function(database){console.log("se cambio el valor database")}
}
