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
                <div>
                    <Container className="contenedor">
                        <Component route={route} />
                    </Container>
                </div>

                <div>
                    <footer className="gral-footer">
                        <p>CAIN &copy; 2019</p>
                    </footer>
                </div>
            </>
        )
    }
}