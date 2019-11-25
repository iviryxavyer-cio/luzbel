/**
 * @author JesusAlberto Briseño Camacho <jabc55@live.com>
 * @date 06/11/2019
 * @fileoverview DataTable de conectores
 * @version 1.0.0
 * 
 */
import React, { Component } from 'react'
import { driversActions } from '../../../actions/drivers.actions';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class DataTableConectores extends Component {

  constructor (props) {
    super(props)
    this.getAllDrivers = this.getAllDrivers.bind(this)
    this.getAllDrivers()
  }
  //Función para obtener todos los Conectores
    getAllDrivers(){
      this.props.dispatch(driversActions.getAllDrivers())
    }
  
  render(){
    const { drivers, modificarDrivers } = this.props;    

    const selectRowProp = {
          mode: 'radio',
          clickToSelect: true, 
          bgColor: '#91c4f7',
          hideSelectColumn: true
    };
  
    const options={
        //Función para modificar el renglon al caul se le dio un click
        onRowClick: function(row){
          modificarDrivers(row)           
        }
    }

    return(
      <div>        
          <BootstrapTable               
                data = { drivers.allDrivers.conectores } 
                selectRow = { selectRowProp }
                options = { options }
                pagination>
                <TableHeaderColumn dataField='nombreConector' isKey={ true }>Nombre</TableHeaderColumn>
                <TableHeaderColumn dataField='urlConector'>URL</TableHeaderColumn>
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