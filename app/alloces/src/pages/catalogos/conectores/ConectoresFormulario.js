/**
 * @author JesusAlberto Briseño Camacho <jabc55@live.com>
 * @date 06/11/2019
 * @fileoverview Formulario de los conectores
 * @version 1.0.0
 * 
 */
import React from 'react';
import { Field, reduxForm, getFormSyncErrors } from 'redux-form';
import { connect } from 'react-redux';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { required } from '../../../Utilidades/validaciones';
import CampoTexto from '../../../componentes/comun/CampoTexto.component';
//import CampoRadio from '../../../componentes/comun/CampoRadio';
import EliminarFormulario from '../../../componentes/comun/EliminarFormulario';
import { modalAcciones } from '../../../actions/modal.actions';
import { driversActions } from '../../../actions/drivers.actions';

//const valueSelector = formValueSelector('conectoresFormulario');

class ConectoresFormulario extends React.Component {

    constructor(props){
        super(props)

        if(props.datos) {
            this.props.initialize({
                idConector: props.datos.idConector,
                nombreConector: props.datos.nombreConector,
                urlConector: props.datos.urlConector,
                //status: props.datos.urlConector
            })
        }
        this.eliminar = this.eliminar.bind(this)
        this.abrirModalEliminar = this.abrirModalEliminar.bind(this)
    }
    //Función de eliminar 
    eliminar(datos){
        this.props.dispatch(driversActions.eliminar(datos.idConector))
    }
    //Funcion para abrir el modal de eliminación y agregar el formulario de eliminación
    abrirModalEliminar(e, datosFormulario) {
        const campos = <EliminarFormulario
                            onSubmit={this.eliminar}
                            datos={datosFormulario}
                            cerrarModal={this.props.cerrarModal}
                            mensaje={`¿Seguro que quieres eliminar el conector "${datosFormulario.nombreConector}"?`}
                            botonTitulo={'Aceptar'}
                        />
        const titulo = 'Eliminar conector'
        this.props.dispatch(modalAcciones.formulario({ titulo, campos, tamanio: 'md' }));
    }

    render() {
        const { handleSubmit, handleChange, labelBoton, cerrarModal } = this.props;

        return (
            <form onSubmit={handleSubmit} className='form-horizontal'>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        Nombre Conector:
                    </Form.Label>
                    <Col sm={9}>
                        <Field
                            name="nombreConector"
                            type="text"
                            component={CampoTexto}
                            validate={!this.props.datos ? [required] : undefined}
                            onChange={handleChange}
                        />
                    </Col>                    
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        UrlConector:
                    </Form.Label>
                    <Col sm={9}>
                        <Field 
                            name="urlConector"
                            type="text"
                            component={CampoTexto}
                            validate={!this.props.datos ? [required] : undefined}
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>
                {/*{
                    eliminar === 1 ?
                        <Form.Group as = {Row}>
                            <Form.Label column sm={3}>
                                Status:
                            </Form.Label>
                            <Col sm={4}>
                                <Field
                                    name="status"
                                    component={CampoRadio}
                                    label={'Activo'}
                                    valor={'A'}
                                />
                            </Col>
                            <Col sm={4}>
                                <Field
                                    name="status"
                                    component={CampoRadio}
                                    label={'Inactivo'}
                                    valor={'I'}
                                />
                            </Col>
                        </Form.Group> :
                    undefined
                }*/}

                <Modal.Footer>
                    <Button variant="secondary" onClick={cerrarModal}>
                        Cancelar
                    </Button>
                    {/*{
                        eliminar === 1 ?
                            <Button variant="danger" onClick={(e) => this.abrirModalEliminar(e, this.props.datos)}>
                                Eliminar
                            </Button>
                                :
                                undefined
                    }*/}
                    <Button type="submit">
                        {labelBoton}
                    </Button>
                </Modal.Footer>
            </form>
        )
    }
}

let DriversReduxForm = reduxForm({
    form: 'conectoresFormulario',
    initialValues: { enabled: true }
})(ConectoresFormulario)

DriversReduxForm = connect(state => {
    return {
        errors: getFormSyncErrors('conectoresFormulario')(state),
    }
})(DriversReduxForm);

export default DriversReduxForm;