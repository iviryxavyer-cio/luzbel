import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import '../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'

class DataTableUsuarios extends Component {
    constructor (props) {
        super(props)
        this.state = {};
    }

    render(){
        const { users, modificar } = this.props

        const selectRowProp = {
            mode: 'radio',
            clickToSelect: true,
            bgColor: '#91c4f7',
            hideSelectColumn: true
        };

        const options = {
            onRowClick: function(row) {
                modificar(row)
            }
        }

        return(
            <div>
                <BootstrapTable
                    data = { users.allUsers }
                    selectRow = { selectRowProp }
                    options = { options }
                    pagination>
                        <TableHeaderColumn dataField='usuario' isKey={ true }>Usuarios</TableHeaderColumn>
                        <TableHeaderColumn dataField='nombreUsuario'>Nombres</TableHeaderColumn>
                        <TableHeaderColumn dataField='apellidoUsuario'>Apellidos</TableHeaderColumn>
                        <TableHeaderColumn dataField='correoUsuario'>Correo</TableHeaderColumn>
                        <TableHeaderColumn dataField='telefonoUsuario'>Telefono</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default DataTableUsuarios;