import React, { Component } from 'react'
//importamos los datatable para su utilizaciones
//import DataTable from 'react-data-table-component';
import { serversActions } from '../../../actions/servidores.actions';
import { connect } from 'react-redux';
// with es6
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import '../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class DataTableServidores extends Component {

  constructor(props) {
    super(props)
    this.getAllServers = this.getAllServers.bind(this)
    this.getAllServers();

    this.state = {
      selected: [],
    }
    this.onSelectRow = this.onSelectRow.bind(this);
  }

  getAllServers() {
    this.props.dispatch(serversActions.getAllServers())
  }

  onSelectRow({idServidor}) {
    const findID = this.state.selected.find(id => id===idServidor);
    if(!findID){
      this.state.selected.push(idServidor)
    }else {
      this.state.selected.splice(this.state.selected.indexOf(idServidor), 1)
    }
    this.props.onSelected(this.state.selected)
  }

  render() {
    const { servers, modificar } = this.props;
    const selectRowProp = {
      mode: 'radio',
      clickToSelect: true,
      bgColor: '#91c4f7',
      hideSelectColumn: true,
      onSelect: this.onSelectRow
    };
    const options = {

      onRowDoubleClick: function (row) {
        modificar(row)
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