import React, { Component } from 'react';
import './NoEncuentra.scss'

export default class NotFound extends Component {
    render() {
        return (
            <>
                <main className="contenido">
                    <div className="content">
                        <h1 className="tituloCentrado">404</h1>
                        <p className='parrafo'>La página que intentas solicitar no está en el servidor.</p>
                    </div>
                </main>
                <div className="cloud"></div>
                <div className="cloud bt"></div>
            </>
        )
    }
}