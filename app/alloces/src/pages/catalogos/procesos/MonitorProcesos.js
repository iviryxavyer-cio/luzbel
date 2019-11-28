import React from 'react';
import { Container, ButtonToolbar, Button } from 'react-bootstrap';
import CardComponent from './CardComponent';

export default function MonitorProcesos() {
    return (           
        <>
            <Container>
                <h1>Monitor de Procesos</h1>
                <h2 className="text-center">Procesos</h2>
            </Container>
            <Container className="FondoGrisClaro">                
                <CardComponent/>
            </Container>
        </>
    );
}