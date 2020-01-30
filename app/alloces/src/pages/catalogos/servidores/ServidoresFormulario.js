import React from 'react';
import { Field, reduxForm, getFormSyncErrors } from 'redux-form';
import { connect } from 'react-redux';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { required } from '../../../Utilidades/validaciones';
import CampoTexto from '../../../componentes/comun/CampoTexto.component';
import CampoRadio from '../../../componentes/comun/CampoRadio';

//const valueSelector = formValueSelector('servidorFormulario');

class ServidoresFormulario extends React.Component {
    constructor(props) {
        super(props)

        if (props.datos) {
            this.props.initialize({
                id: props.datos.idServidor,
                alias: props.datos.aliasServidor,
                direccion: props.datos.direccion,
                status: props.datos.status
            })
        }
    }

    render() {
        const { handleSubmit, handleChange, labelBoton, cerrarModal, eliminar } = this.props;

        return (
            <form onSubmit={handleSubmit} className='form-horizontal'>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        Direccion:
                    </Form.Label>
                    <Col sm={9}>
                        <Field
                            name="direccion"
                            type="text"
                            component={CampoTexto}
                            validate={!this.props.datos ? [required] : undefined}
                            onChange={handleChange} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        Alias:
                    </Form.Label>
                    <Col sm={9}>
                        <Field
                            name="alias"
                            type="text"
                            component={CampoTexto}
                            validate={!this.props.datos ? [required] : undefined}
                            onChange={handleChange} />
                    </Col>

                </Form.Group>

                {
                    eliminar === '1' ?
                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>
                                Status:
                            </Form.Label>
                            <Col sm={4}>
                                <Field
                                    name="status"
                                    component={CampoRadio}
                                    label={'Activo'}
                                    valor={'A'} />
                            </Col>
                            <Col sm={4}>
                                <Field
                                    name="status"
                                    component={CampoRadio}
                                    label={'Inactivo'}
                                    valor={'I'} />
                            </Col>
                        </Form.Group> :
                    undefined
                }

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

let ServidoresReduxForm = reduxForm({
    form: 'servidorFormulario',
    initialValues: { enabled: true }
})(ServidoresFormulario)

ServidoresReduxForm = connect(state => {
    return {
        errors: getFormSyncErrors('servidorFormulario')(state),
    }
})(ServidoresReduxForm);

export default ServidoresReduxForm;