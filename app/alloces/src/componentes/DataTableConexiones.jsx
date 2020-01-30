import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { connect } from 'react-redux';
// dispatchs
import { conexionesActions } from "../actions/conexiones.actions";

import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class DataTableConexiones extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
    //dispatch
    this.props.dispatch(conexionesActions.getAllConexiones());
  }

  render(){
    const { connections } = this.props;

    const selectRowProp = {
      mode: 'radio',
      clickToSelect: true,
      //bgColor: '#91c4f7',
      className:"bg-info",
      hideSelectColumn: true,
      onSelect: this.props.handleRowSelection
    };

    return(
      <div>        
        <BootstrapTable               
          data = { connections.allConexiones } 
          selectRow = { selectRowProp }
          //options = { options }
          pagination
        >
          <TableHeaderColumn dataField='idConexion' isKey={ true }># Conexion</TableHeaderColumn>
          <TableHeaderColumn dataField='idServidor'>Servidor</TableHeaderColumn>
          <TableHeaderColumn dataField='idConector'>Conector</TableHeaderColumn>
          <TableHeaderColumn dataField='bd'>BD</TableHeaderColumn>
          <TableHeaderColumn dataField='usuario'>Usuario</TableHeaderColumn>
          <TableHeaderColumn dataField='puerto'>Puerto</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

// vincular store
function mapPropsState(state){
  return {
    connections: state.connections
  }
}

export default connect(mapPropsState)(DataTableConexiones);