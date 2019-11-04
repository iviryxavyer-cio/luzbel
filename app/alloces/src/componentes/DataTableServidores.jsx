import React, { Component } from 'react'
//importamos los datatable para su utilizaciones
//import DataTable from 'react-data-table-component';
import { serversActions } from '../actions/servidores.actions';
import { connect } from 'react-redux';
// with es6
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class DataTableServidores extends Component {

  constructor(props) {
    super(props)
    this.getAllServers = this.getAllServers.bind(this)
  }

  getAllServers() {
    this.props.dispatch(serversActions.getAllServers())
  }
  render() {
    const { servers } = this.props;
    console.log(servers);
    var Servidor;
    const selectRowProp = {
      mode: 'radio',
      clickToSelect: true,
      bgColor: '#91c4f7',
      hideSelectColumn: true
    };
    const options = {

      onRowClick: function (row) {

        Servidor = row.ip;
        document.getElementById('Editar').removeAttribute("disabled");
        document.getElementById('Eliminar').removeAttribute("disabled");

      }
    }

    // const handleIndeterninate = isIndeterminate => (isIndeterminate ? <FontIcon>indeterminate_check_box</FontIcon> : <FontIcon>check_box_outline_blank</FontIcon>)
    return (
      <div>
        <BootstrapTable
          data={servers.allServers}
          selectRow={selectRowProp}
          options={options}
          pagination>
          <TableHeaderColumn isKey={true} dataField='direccion' >Direccion IP</TableHeaderColumn>
          <TableHeaderColumn dataField='aliasServidor'>Nombre</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

function mapPropsState(state) {
  return {
    servers: state.servers
  }
}

export default connect(mapPropsState)(DataTableServidores);