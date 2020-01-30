import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Topbar from '../../componentes/comun/AppBar';


export default class PlantillaPublica extends Component {
    render() {
        const Component = this.props.component;
        const route = this.props.route;
        //const estadoApp = this.props.estadoApp;

        return (
            <>
                <Topbar />
                <Container>
                    <Component route={route} />
                </Container>

                <footer className="page-footer blue lighten-1">
                    © 2019 Cain v0.0.0
                </footer>
            </>
        )
    }
}