import React, { Component } from "react";
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import _ from 'lodash';

import PlantillaPublica from './publico';
import PlantillaPrivada from './privado';

import RutasPrivadas from './rutas/rutasPrivadas';
import RutasPublicas from './rutas/rutasPublicas';

import Login from '../pages/Sesion/Login';
import NotFound from './publico/NoEncuentra';

import { historial } from '../Utilidades/historial';
import rutasPublicas from "./rutas/rutasPublicas";
import rutasPrivadas from "./rutas/rutasPrivadas";
import { Modal, Button } from 'react-bootstrap';
import { modalAcciones } from '../actions/modal.actions';


class Plantilla extends Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;

        historial.listen((location, action) => {
            //dispatch(alertaAcciones.limpiar());
        });
    }

    ocultarModal() {
        const { dispatch } = this.props;
        dispatch(modalAcciones.limpiar());
    }

    render() {
        const stateApp = this.props.stateApp;

        //if (!stateApp.authentication.loggedIn) { return (<div>Cargando... </div>); }

        const { modal } = this.props.stateApp;

        return (
            <>
                <Router history={historial}>
                    <Switch>
                        {_.map(rutasPublicas, (ruta, key) => {
                            const { component, path } = ruta;
                            return (
                                <Route exact
                                    path={path}
                                    key={key}
                                    render={(ruta) => <PlantillaPublica component={component} route={ruta} estadoApp={stateApp} />}
                                />
                            );
                        })}
                        {_.map(rutasPrivadas, (route, key) => {
                            const { component, path } = route;
                            return (
                                <Route exact
                                    path={path}
                                    key={key}
                                    render={(route) =>
                                        stateApp.authentication.loggedIn ? (
                                            <PlantillaPrivada component={component} route={route} state={stateApp} />
                                        ) : (
                                                <PlantillaPublica component={Login} route={route} estadoApp={stateApp} />
                                            )
                                    }
                                />
                            )
                        })}
                        <Route component={NotFound} />
                    </Switch>
                </Router>
                <Modal
                    show={modal.mostrar}
                    onHide={() => this.ocultarModal()}
                    dialogClassName="modal-90w"
                    size={modal.tamanio}
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            {modal.titulo}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            modal.body ?
                                <p className='text-center'>{modal.body}</p> :
                                modal.formulario ?
                                    modal.formulario : null
                        }
                    </Modal.Body>
                    {
                        !modal.formulario ?
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => this.ocultarModal()}>
                                    Cerrar
                                </Button>
                            </Modal.Footer> :
                            null
                    }
                </Modal>

            </>
        )
    }
}

function mapsPropsState(state, props) { return { stateApp: state } };
function mapDispatchToProps(dispatch) { return { dispatch } };

export default connect(
    mapsPropsState,
    mapDispatchToProps
)(Plantilla);