import React from 'react';
import { Field, reduxForm, getFormSyncErrors, formValueSelector} from 'redux-form';
import { connect } from 'react-redux';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { required } from '../../../Utilidades/validaciones';
import CampoTexto from '../../../componentes/comun/CampoTexto.component';
import EliminarFormulario from '../../../componentes/comun/EliminarFormulario';
import { modalAcciones } from '../../../actions/modal.actions';
import { serversActions } from '../../../actions/servidores.actions';

const valueSelector = formValueSelector('servidorFormulario');

class ServidoresFormulario extends React.Component {
    constructor(props) {
        super(props)

        if(props.datos) {
            this.props.initialize({
                id: props.datos.idServidor,
                alias: props.datos.aliasServidor,
                direccion: props.datos.direccion,
                status: props.datos.status
            })
        }

        this.eliminar = this.eliminar.bind(this)
        this.abrirModalEliminar = this.abrirModalEliminar.bind(this)
    }

    eliminar(datos) {
        this.props.dispatch(serversActions.eliminar(datos.idServidor))
    }

    abrirModalEliminar(e, datosFormulario) {
        console.log(datosFormulario)
        const campos = <EliminarFormulario
                            onSubmit={this.eliminar}
                            datos={datosFormulario}
                            cerrarModal={this.props.cerrarModal}
                            mensaje={`¿Seguro que quieres eliminar el servidor "${datosFormulario.aliasServidor}"?`}
                            botonTitulo={'Aceptar'} />;
        const titulo = 'Eliminar servidor'
        this.props.dispatch(modalAcciones.formulario({titulo, campos, tamanio: 'md'}));
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

                <Modal.Footer>
                    <Button variant="secondary" onClick={cerrarModal}>
                        Cancelar
                    </Button>
                    { 
                        eliminar==1 ?
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