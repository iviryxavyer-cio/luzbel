import React from 'react'
import '../../../App.css'
import { Container } from 'reactstrap'
import { ButtonToolbar, Button } from 'react-bootstrap'
import DataTableUsuarios from './DataTableUsuarios'
import { connect } from 'react-redux';
import { usersActions } from '../../../actions/usuarios.actions';
import { modalAcciones } from '../../../actions/modal.actions';
import FormularioAgregarEditar from './FormularioAgregarEditar';
import EliminarFormulario from '../../../componentes/comun/EliminarFormulario';

class Usuarios extends React.Component {
    constructor(props) {
        super(props)
        this.props.dispatch(usersActions.getAllUsers());
        this.state = {selectedRow: []};

        this.registrar = this.registrar.bind(this);
        this.modificar = this.modificar.bind(this);
        this.cerrarModal = this.cerrarModal.bind(this);
        this.abrirModalRegistrar = this.abrirModalRegistrar.bind(this);
        this.abrirModalEditar = this.abrirModalEditar.bind(this);
        this.handleGetChildrenState = this.handleGetChildrenState.bind(this);
        this.abrirModalEliminarSeleccion = this.abrirModalEliminarSeleccion.bind(this);
        this.eliminarSeleccionados = this.eliminarSeleccionados.bind(this);
    }

    registrar(datosFormulario) {
        this.props.dispatch(usersActions.registrar(datosFormulario))
    }

    modificar(datosFormulario) {
        this.props.dispatch(usersActions.modificar(datosFormulario));
    }

    cerrarModal() {
        this.props.dispatch(modalAcciones.limpiar());
    }

    abrirModalRegistrar() {
        const campos = <FormularioAgregarEditar
            onSubmit={this.registrar}
            cerrarModal={this.cerrarModal}
            labelBoton={'Aceptar'}
        />;
        const titulo = 'Creando usuario'

        this.props.dispatch(modalAcciones.formulario({
            titulo,
            campos,
            tamanio: 'md'
        }))
    }

    abrirModalEditar(datosFormulario) {
        const campos = <FormularioAgregarEditar
            onSubmit={this.modificar}
            datos={datosFormulario}
            cerrarModal={this.cerrarModal}
            labelBoton={'Aceptar'}
            eliminar={1}
        />;
        const titulo = 'Modificando usuario';
        this.props.dispatch(modalAcciones.formulario({ titulo, campos, tamanio: 'md' }))
    }

    abrirModalEliminarSeleccion(){
        const campos = <EliminarFormulario
                            onSubmit={this.eliminarSeleccionados}
                            datos={this.state.selectedRow}
                            cerrar={this.cerrarModal}
                            mensaje={'¿Seguro que quieres eliminar los usuarios seleccionados?'}
                            botonTitulo={'Aceptar'} />
        const titulo = 'Eliminar usuarios';
        this.props.dispatch(modalAcciones.formulario({titulo, campos, tamanio:'md'}))
    }


    handleGetChildrenState(data){
        this.state.selectedRow = [...data]
    }

    eliminarSeleccionados(datos){
        this.props.dispatch(usersActions.eliminarSeleccionados(datos))
    }
    render() {
        const { usuarios } = this.props;
        return (
            <Container>
                <h1 className="text-center">Usuarios</h1>
                <ButtonToolbar>
                    <Button
                        className="buttons boutton-crud Agregar"
                        onClick={this.abrirModalRegistrar}>
                        Agregar
                    </Button>
                    <Button 
                    className="buttons boutton-crud Eliminar"
                    onClick={this.abrirModalEliminarSeleccion}>
                        Eliminar
                    </Button>
                </ButtonToolbar>
                <DataTableUsuarios 
                    users={usuarios} 
                    modificar={this.abrirModalEditar}
                    onChange={this.handleGetChildrenState}/>
            </Container>
        )
    }
}

function mapsPropsToState(state) {
    const { usuarios } = state

    return {
        usuarios
    }
}

export default connect(mapsPropsToState)(Usuarios);

