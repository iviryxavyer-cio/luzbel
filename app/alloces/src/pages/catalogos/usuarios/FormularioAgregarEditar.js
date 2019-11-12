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
import { maxLength10, required } from '../../../Utilidades/validaciones'
import CampoTexto from '../../../componentes/comun/CampoTexto.component';
import CampoContrasena from '../../../componentes/comun/CampoContrasena';

const valueSelector = formValueSelector('usuariosFormulario');


class FormularioAgregarEditar extends Component {
    constructor(props) {
        super(props);

        if (props.datos) {
            this.props.initialize({
                usuario: props.datos.usuario,
                nombre: props.datos.nombreUsuario,
                apellido: props.datos.apellidoUsuario,
                telefono: props.datos.telefonoUsuario,
                correo: props.datos.correoUsuario,
                status: 'A',
                contrasena: props.datos.contrasena
            })
        }
    }

    render() {
        const { handleSubmit, handleChange, labelBoton, cerrarModal } = this.props;

        return (
            <form onSubmit={handleSubmit} className='form-horizontal' >
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        Usuario:
                    </Form.Label>
                    <Col sm={9}>
                        <Field
                            label='Usuario'
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
                            label='Nombre'
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
                            label='Apellido'
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
                            label='Correo'
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
                            label='Telefono'
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
                            label='Contraseña'
                            name="usuario"
                            type="text"
                            component={CampoContrasena}
                            validate={[required]}
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>

                <Modal.Footer>
                    <Button variant="secondary" onClick={cerrarModal}>
                        Cancelar
                    </Button>
                    <Button type="submit">{labelBoton}</Button>
                </Modal.Footer>

            </form>
        )
    }
}

let UsuariosReduxForm = reduxForm({
    form: 'usuariosFormulario',
})(FormularioAgregarEditar);

UsuariosReduxForm = connect(state => {
    return {
        errors: getFormSyncErrors('usuariosFormularios')(state),
        nombre: valueSelector(state, 'nombre')
    }
})(UsuariosReduxForm);

export default UsuariosReduxForm;