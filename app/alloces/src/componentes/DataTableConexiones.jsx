import React, { Component } from 'react'
//importamos los datatable para su utilizaciones
//import DataTable from 'react-data-table-component';

// with es6
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// with es5
/*var ReactBsTable = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

// with es5
require('node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css');*/
// with es6
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class DataTableConexiones extends Component {

  constructor (props) {
    super(props)
    this.state = { 
      db: '',
      servidor: '',
      usuario: '',
      contrasenia: '',
      conector: '',
      puerto: ''
    }
    //this.handleBDChanged = this.handleBDChanged.bind(this);
  }

/*  handleBDChanged (event) {
    this.setState({db: event.target.value})
  }*/

  render(){
 //Variable que contiene los campos de prueba       
  const data = [{db: 'db_intranet', servidor: '10.1.1.18', usuario: 'tca', contrasenia: 'ITerp01@02', conector: 'SQL', puerto: '27010'},
                {db: 'TCADBDWH', servidor: '10.1.1.67', usuario: 'tca', contrasenia: 'ITerp01@02', conector: 'SQL', puerto: '27010'}];

  const selectRowProp = {
        mode: 'radio',
        clickToSelect: true, 
        bgColor: '#91c4f7',
        hideSelectColumn: true
  };

  const options = {

      onRowClick: function(row) {

          document.getElementById('Eliminar').removeAttribute("disabled");

      }

  }
 // const handleIndeterninate = isIndeterminate => (isIndeterminate ? <FontIcon>indeterminate_check_box</FontIcon> : <FontIcon>check_box_outline_blank</FontIcon>)
    return(
      <div>        
        <BootstrapTable 
              
              data = { data } 
              selectRow = { selectRowProp }
              options = { options }
              pagination>
              <TableHeaderColumn dataField='db' isKey={ true }>Base de Datos</TableHeaderColumn>
              <TableHeaderColumn dataField='servidor'>Servidor</TableHeaderColumn>
              <TableHeaderColumn dataField='usuario'>Usuario</TableHeaderColumn>
              <TableHeaderColumn dataField='contrasenia'>Contraseña</TableHeaderColumn>
              <TableHeaderColumn dataField='conector'>Conector</TableHeaderColumn>
              <TableHeaderColumn dataField='puerto'>Puerto</TableHeaderColumn>
            </BootstrapTable>
      </div>
    );
  }
}

export default DataTableConexiones;