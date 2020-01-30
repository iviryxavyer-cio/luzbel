import React from 'react';
import { Container, ButtonToolbar} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import CardComponent from '../../../componentes/comun/CardComponent';

import { WizzardTtl } from '../../../componentes/wizzard/wizzardTtl';
import { modalAcciones } from '../../../actions/modal.actions';

export default function MonitorProcesos() {
    const dispatch = useDispatch();
    const onAddModel = () => {
        const campos = <WizzardTtl />
        const titulo = 'Crear proceso de sqoop';
        dispatch(modalAcciones.formulario({ titulo, campos, tamanio: 'md'}))
    }

    return (           
        <>
            <Container>
                <h1>Monitor de Procesos</h1>
                <ButtonToolbar>
                    <Button variant="contained" color="primary"
                        onClick={onAddModel}>
                        Añadir
                    </Button>
                        
                </ButtonToolbar>
                <CardComponent/>
            </Container>
        </>
    );
}