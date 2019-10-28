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

class DataTableServidores extends Component {

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
  const data = [{ip: '10.1.1.67', nombre: 'El 67'},
                {ip: '10.1.1.18', nombre: 'El 18'},
                {ip: '10.1.1.40', nombre: 'SAP'}];
  var Servidor;
  const selectRowProp = {
        mode: 'radio',
        clickToSelect: true, 
        bgColor: '#91c4f7',
        hideSelectColumn: true
  };
  const options={

        onRowClick: function(row){ 
          
             Servidor = row.ip;
             document.getElementById('Editar').removeAttribute("disabled");
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
              <TableHeaderColumn dataField='ip' isKey={ true }>IP</TableHeaderColumn>
              <TableHeaderColumn dataField='nombre'>Nombre</TableHeaderColumn>
            </BootstrapTable>
      </div>
    );
  }
}

export default DataTableServidores;