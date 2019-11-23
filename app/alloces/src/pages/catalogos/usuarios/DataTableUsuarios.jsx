import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import '../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'

class DataTableUsuarios extends Component {
    constructor (props) {
        super(props)
        this.state = {
            selected: [],
        };
        this.onSelectRow = this.onSelectRow.bind(this);
    }

    onSelectRow({idUsuario}, isSelected) {
        console.log(isSelected)
        if(isSelected){
            this.setState({
                selected: [...this.state.selected, idUsuario].sort()
            });
        } else {
            this.setState({selected: this.state.selected.filter(it => it !== idUsuario) });
        }
        console.log(this.state);
        return false;
    }

    render(){
        const { users, modificar } = this.props

        const selectRowProp = {
            mode: 'checkbox',
            clickToSelect: true,
            bgColor: '#91c4f7',
            hideSelectColumn: true,
            onSelect: this.onSelectRow,
        };

        const options = {
            onRowDoubleClick: function(row) {
                modificar(row)
            }
        }

        return(
            <div>
                <BootstrapTable
                    version='4'
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