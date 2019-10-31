import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { connect } from 'react-redux';
import { connectionsActions } from '../actions/conexiones.actions';

import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


class DataTableConexiones extends Component {

  constructor (props) {
    super(props)
    this.getAllConnections = this.getAllConnections.bind(this);
    this.getAllConnections()
  }

  getAllConnections() {
    this.props.dispatch(connectionsActions.getAllConnections())
  }

  render(){
    const { connections } = this.props;

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
              
              data = { connections.allConnections } 
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

function mapPropsState(state){
  return {
    connections: state.connections
  }
}

export default connect(mapPropsState)(DataTableConexiones);