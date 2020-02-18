/**
 * @author Luis Manuel Torres Treviño
 * @date 11/11/2019
 * @description Este archivo contiene la logica para la creacion de la datatable
 * @cambio se corrigieron titulos de tabla y ortografia
 */

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

    onSelectRow({idUsuario}) {
        const findID = this.state.selected.find((id) => {
            return id === idUsuario;
        })

        if (!findID) {
            this.state.selected.push(idUsuario) 
        } else {
            this.state.selected.splice( this.state.selected.indexOf(idUsuario), 1)            
        }
        this.props.onChange(this.state.selected);
    }

    render(){
        const { users, modificar } = this.props

        const selectRowProp = {
            mode: 'radio',
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
                        <TableHeaderColumn dataField='usuario' isKey={ true }>Usuario</TableHeaderColumn>
                        <TableHeaderColumn dataField='nombreUsuario'>Nombre</TableHeaderColumn>
                        <TableHeaderColumn dataField='apellidoUsuario'>Apellidos</TableHeaderColumn>
                        <TableHeaderColumn dataField='correoUsuario'>Correo</TableHeaderColumn>
                        <TableHeaderColumn dataField='telefonoUsuario'>Teléfono</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default DataTableUsuarios;