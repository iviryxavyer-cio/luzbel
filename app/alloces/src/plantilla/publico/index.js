import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


export default class PlantillaPublica extends Component {
    render() {
        const Component = this.props.component;
        const route = this.props.route;
        //const estadoApp = this.props.estadoApp;

        return (
            <>

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