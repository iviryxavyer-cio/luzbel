import React, { Component } from 'react';
import SideBar from '../../componentes/comun/sideBar.component';
import TopBar from '../../componentes/comun/AppBar'

export default class PlantillaPrivada extends Component {
    render() {
        const Component = this.props.component;
        const route = this.props.route;
        //const state = this.props.state;

        return (
            <>
                <TopBar />
                <SideBar />
                <Component route={route} />
            </>
        )
    }
}