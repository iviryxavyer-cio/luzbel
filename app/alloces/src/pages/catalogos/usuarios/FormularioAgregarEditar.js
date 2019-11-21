/**
 * @author Luis Manuel Torres Treviño
 * @date 11/11/2019
 * @description Este archivo contiene el formulario de creacion 
 * y modificación de usuarios.
 */
import React, { Component } from 'react';
import { Field, reduxForm, getFormSyncErrors, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { required } from '../../../Utilidades/validaciones'
import CampoTexto from '../../../componentes/comun/CampoTexto.component';
import CampoContrasena from '../../../componentes/comun/CampoContrasena';
import EliminarFormulario from '../../../componentes/comun/EliminarFormulario';
import { modalAcciones } from '../../../actions/modal.actions';
import { usersActions } from '../../../actions/usuarios.actions';

const valueSelector = formValueSelector('usuariosFormulario');


class FormularioAgregarEditar extends Component {
    constructor(props) {
        super(props);

        if (props.datos) {
            this.props.initialize({
                id: props.datos.idUsuario,
                usuario: props.datos.usuario,
                nombre: props.datos.nombreUsuario,
                apellido: props.datos.apellidoUsuario,
                telefono: props.datos.telefonoUsuario,
                correo: props.datos.correoUsuario,
                contrasena: props.datos.contrasena
            })
        }
        
        this.eliminar = this.eliminar.bind(this)
        this.abrirModalEliminar = this.abrirModalEliminar.bind(this)
    }

    eliminar(datos) {
        this.props.dispatch(usersActions.eliminar(datos.idUsuario))
    }

    abrirModalEliminar(e, datosFormulario) {
        const campos = <EliminarFormulario
                            onSubmit={this.eliminar}
                            datos={datosFormulario}
                            cerrarModal={this.props.cerrarModal}
                            mensaje={`¿Seguro que quires eliminar el usuario "${datosFormulario.nombreUsuario}"?`}
                            botonTitulo={'Aceptar'} />;
        const titulo = 'Eliminar usuario';
        this.props.dispatch(modalAcciones.formulario({titulo, campos, tamanio: 'md'}));
    }

    render() {
        const { handleSubmit, handleChange, labelBoton, cerrarModal, eliminar} = this.props;

        return (
            <form onSubmit={handleSubmit} className='form-horizontal'>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        Usuario:
                    </Form.Label>
                    <Col sm={9}>
                        <Field
                            name="usuario"
                            type="text"
                            component={CampoTexto}
                            validate={[required]}
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        Nombre:
                    </Form.Label>
                    <Col sm={9}>
                        <Field
                            name="nombre"
                            type="text"
                            component={CampoTexto}
                            validate={[required]}
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        Apellido:
                    </Form.Label>
                    <Col sm={9}>
                        <Field
                            name="apellido"
                            type="text"
                            component={CampoTexto}
                            validate={[required]}
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        Correo:
                    </Form.Label>
                    <Col sm={9}>
                        <Field
                            name="correo"
                            type="text"
                            component={CampoTexto}
                            validate={[required]}
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        Telefono:
                    </Form.Label>
                    <Col sm={9}>
                        <Field
                            name="telefono"
                            type="text"
                            component={CampoTexto}
                            validate={[required]}
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        Contraseña:
                    </Form.Label>
                    <Col sm={9}>
                        <Field
                            name="contrasena"
                            type="password"
                            component={CampoContrasena}
                        />
                    </Col>
                </Form.Group>

                <Modal.Footer>
                    <Button variant="secondary" onClick={cerrarModal}>
                        Cancelar
                    </Button>
                    { 
                        eliminar===1 ?
                        <Button variant="danger" onClick={(e) => this.abrirModalEliminar(e, this.props.datos)}>
                            Eliminar
                        </Button>
                        :
                        undefined
                    }
                    <Button type="submit">{labelBoton}</Button>
                </Modal.Footer>

            </form>
        )
    }
}

let UsuariosReduxForm = reduxForm({
    form: 'usuariosFormulario',
    initialValues: { enabled: true },
})(FormularioAgregarEditar);

UsuariosReduxForm = connect(state => {
    return {
        errors: getFormSyncErrors('usuariosFormulario')(state),
    }
})(UsuariosReduxForm);

export default UsuariosReduxForm;