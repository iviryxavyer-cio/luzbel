/**
 * @author Luis Manuel Torres Treviño
 * @date 11/11/2019
 * @description Este archivo contiene el componente del formulario de eliminar
 */

import React from 'react';
import { reduxForm, getFormSyncErrors } from 'redux-forms';
import { connect } from 'react-redux';
import { Modal, Button} from 'react-bootstrap';

class EliminarFormulario extends React.Component {
    constructor(props) {
        super(props);

        if(props.datos){
            this.props.initialize(props.datos);
        }
    }

    render() {
        //importar propiedades del componente
        const { handleSubmit, cerrarModal, mensaje, botonTitulo, colorFondo } = this.props;
        const fondoBoton = colorFondo ? colorFondo : 'danger';

        return (
            <form onSubmit={handleSubmit} className='form-horizontal' >
                <p className='text-center'>{mensaje}</p>
                <Modal.Footer>
                    <Button variant="secondary" className="gral-boton"onClick={cerrarModal}>
                        Cancelar
                    </Button>
                    <Button type="submit" className="gral-boton"variant='danger'>{botonTitulo}</Button>
                </Modal.Footer>

            </form>
        )
    }
}

let EliminarFormularioRedux = reduxForm({
    form: "eliminarFormulario", // un identificador único para este formulario
})(EliminarFormulario);

// Tienes que conectar a cualquier reductor que desees conectarlo con éste mismo
// en éste caso conecta con los errores de validacion que puede tener
// IMPORTANTE
EliminarFormularioRedux = connect(state => {
    return {
        errors: getFormSyncErrors("eliminarFormulario")(state),
    };
})(EliminarFormularioRedux);

export default EliminarFormularioRedux;
