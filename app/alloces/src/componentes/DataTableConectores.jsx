import React, { Component } from 'react'
import { driversActions } from '../actions/drivers.actions';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class DataTableConectores extends Component {

  constructor (props) {
    super(props)
    this.getAllDrivers = this.getAllDrivers.bind(this)
    this.getAllDrivers()
    }

    getAllDrivers(){
      this.props.dispatch(driversActions.getAllDrivers())
    }
  
  render(){
    const { drivers } = this.props;
    //Variable que contiene los campos de prueba
    /**
     * 
     const data = [{nombre: 'SQL', url: 'SDASQLS'},
     {nombre: 'MONGODB', url: 'MONDBADB'},
     {nombre: 'MYSQL', url: 'MSDASQL'}];
  */

  const selectRowProp = {
        mode: 'radio',
        clickToSelect: true, 
        bgColor: '#91c4f7',
        hideSelectColumn: true
  };

  //var Conector;
  const options={

      onRowClick: function(row){

          //Conector = row.nombre;
          document.getElementById('Editar').removeAttribute("disabled");
          document.getElementById('Eliminar').removeAttribute("disabled");

      }

  }
 // const handleIndeterninate = isIndeterminate => (isIndeterminate ? <FontIcon>indeterminate_check_box</FontIcon> : <FontIcon>check_box_outline_blank</FontIcon>)
    return(
      <div>        
          <BootstrapTable               
                data = { drivers.allDrivers } 
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

function mapPropsState(state){
  return {
    drivers: state.drivers
  }
}

export default connect(mapPropsState)(DataTableConectores);