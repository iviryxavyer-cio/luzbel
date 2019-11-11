import React from 'react'
import '../../../App.css'
import { Col, Row, Container } from 'reactstrap'
import { ButtonToolbar, Button } from 'react-bootstrap'
import DataTableUsuarios from './DataTableUsuarios'
import { connect } from 'react-redux';
import { usersActions } from '../../../actions/usuarios.actions'

class Usuarios extends React.Component {
    constructor(props) {
        super(props)
        this.props.dispatch(usersActions.getAllUsers());
    }


    render() {
        const {usuarios} = this.props;
        return (
            <Container>
                <h1 className="text-center">Usuarios</h1>
                <ButtonToolbar>
                    <Button className="buttons boutton-crud Agregar">
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

