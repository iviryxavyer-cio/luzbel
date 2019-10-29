import React, { Component } from 'react'
// with es6
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class DataTableConectores extends Component {

  constructor (props) {
    super(props)
    this.state = { 
      nombre: '',
      url: ''
    }
    //this.handleBDChanged = this.handleBDChanged.bind(this);
  }

/*  handleBDChanged (event) {
    this.setState({db: event.target.value})
  }*/

  render(){
 //Variable que contiene los campos de prueba       
  const data = [{nombre: 'SQL', url: 'SDASQLS'},
                {nombre: 'MONGODB', url: 'MONDBADB'},
                {nombre: 'MYSQL', url: 'MSDASQL'}];

  const selectRowProp = {
        mode: 'radio',
        clickToSelect: true, 
        bgColor: '#91c4f7',
        hideSelectColumn: true
  };

  var Conector;

  const options={

      onRowClick: function(row){

          Conector = row.nombre;
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
                <TableHeaderColumn dataField='nombre' isKey={ true }>Nombre</TableHeaderColumn>
                <TableHeaderColumn dataField='url'>URL</TableHeaderColumn>
          </BootstrapTable>
      </div>
    );
  }
}

export default DataTableConectores;