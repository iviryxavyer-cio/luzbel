//'use strict'
import React from 'react'
//importamos los datatable para su utilizaciones
//import DataTable from 'react-data-table-component';

// with es6
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// with es5
/*var ReactBsTable = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

// with es5
require('node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css');*/
// with es6
//import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

export class StepThree extends React.Component {
  constructor () {
    super()
    this.state = { 
      db: '',
    }
    //this.handleBDChanged = this.handleBDChanged.bind(this);
  }

/*  handleBDChanged (event) {
    this.setState({db: event.target.value})
  }*/

  render () {
    //Variable que contiene los campos de prueba       
  const data = [{db: 'SAP'},
                {db: 'TCADBDWH'},
                {db: 'SINERGIA17'},
                {db: 'PROMO19'}]; 
  const selectRowProp = {
        mode: 'checkbox',
        clickToSelect: true, 
        onSelectAll: this.onSelectAll
  };
 // const handleIndeterninate = isIndeterminate => (isIndeterminate ? <FontIcon>indeterminate_check_box</FontIcon> : <FontIcon>check_box_outline_blank</FontIcon>)
    return (
      <div>        
        <BootstrapTable 
          ref='table' 
          data={ data } 
          selectRow={ selectRowProp }
          pagination>
          <TableHeaderColumn dataField='db' isKey={ true }>
            Bases de Datos
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}