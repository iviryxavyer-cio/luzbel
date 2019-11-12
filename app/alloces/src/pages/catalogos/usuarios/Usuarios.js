import React from 'react'
import '../../../App.css'
import { Col, Row, Container } from 'reactstrap'
import { ButtonToolbar, Button } from 'react-bootstrap'
import DataTableUsuarios from './DataTableUsuarios'
import { connect } from 'react-redux';
import { usersActions } from '../../../actions/usuarios.actions';
import { modalAcciones } from '../../../actions/modal.actions';
import UsuariosReduxForm from './FormularioAgregarEditar';

class Usuarios extends React.Component {
    constructor(props) {
        super(props)
        this.props.dispatch(usersActions.getAllUsers());

        this.registrar = this.registrar.bind(this)
        this.modificar = this.modificar.bind(this)
        this.eliminar = this.eliminar.bind(this)
        this.cerrarModal = this.cerrarModal.bind(this)
        this.abrirModalRegistrar = this.abrirModalRegistrar.bind(this)
    }

    registrar(datosFormulario) {
        console.log(datosFormulario)
        //this.props.dispatch(usersActions.registrar(datosFormulario))
    }

    modificar(datosFormulario) {
        console.log(datosFormulario)
        //this.props.dispatch(usersActions.modificar(datosFormulario));
    }

    eliminar(datosFormulario) {
        console.log(datosFormulario)
        //this.props.dispatch(usersActions.eliminar(datosFormulario))
    }

    cerrarModal() {
        this.props.dispatch(modalAcciones.limpiar());
    }

    abrirModalRegistrar() {
        const campos = <UsuariosReduxForm
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


    render() {
        const {usuarios} = this.props;
        return (
            <Container>
                <h1 className="text-center">Usuarios</h1>
                <ButtonToolbar>
                    <Button 
                        className="buttons boutton-crud Agregar"
                        onClick={this.abrirModalRegistrar}>
                        Agregar
                    </Button>
                    <Button className="buttons boutton-crud Editar">
                        Editar
                    </Button>
                    <Button className="buttons boutton-crud Eliminar">
                        Eliminar
                    </Button>
                </ButtonToolbar>
                <DataTableUsuarios users={usuarios} />
            </Container>
        )
    }
}

function mapsPropsToState(state){
    const { usuarios } = state

    return {
        usuarios
    }
}

export default connect(mapsPropsToState)(Usuarios);

