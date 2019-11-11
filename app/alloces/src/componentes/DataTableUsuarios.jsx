import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { usersActions } from '../actions/usuarios.actions';
import { connect } from 'react-redux';

import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'

class DataTableUsuarios extends Component {
    constructor (props) {
        super(props)
        this.getAllUsers = this.getAllUsers.bind(this)
        this.getAllUsers()
    }

    getAllUsers() {
        this.props.dispatch(usersActions.getAllUsers())
    }

    render(){
        const { users } = this.props

        const selectRowProp = {
            mode: 'radio',
            clickToSelect: true,
            bgColor: '#91c4f7',
            hideSelectColumn: true
        };

        const options = {
            onRowClick: function(row) {
                document.getElementById('Editar').removeAttribute("disabled")
                document.getElementById('Eliminar').removeAttribute("disabled")
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
                        <TableHeaderColumn dataField='contrasenia'>Contraseña</TableHeaderColumn>
                        <TableHeaderColumn dataField='nombres'>Nombres</TableHeaderColumn>
                        <TableHeaderColumn dataField='apellidos'>Apellidos</TableHeaderColumn>
                        <TableHeaderColumn dataField='correo'>Correo</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

function mapPropsState(state){
    return {
        users: state.users
    }
}

export default connect(mapPropsState)(DataTableUsuarios);