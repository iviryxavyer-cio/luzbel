/**
 * @author Luis Manuel Torres Treviño
 * @date 11/11/2019
 * @description Este archivo contiene el formulario de creacion 
 * y modificación de usuarios.
 * @cambios se corrigieron nombres y se agregaron acentos
 */
import React, { Component } from 'react';
import { Field, reduxForm, getFormSyncErrors } from 'redux-form';
import { connect } from 'react-redux';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { required } from '../../../Utilidades/validaciones'
import CampoTexto from '../../../componentes/comun/CampoTexto.component';
import CampoContrasena from '../../../componentes/comun/CampoContrasena';


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
    }

    render() {
        const { handleSubmit, handleChange, labelBoton, cerrarModal} = this.props;

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
                        Apellidos:
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
                        Teléfono:
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