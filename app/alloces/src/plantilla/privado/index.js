import React, { Component } from 'react';
import SideBar from '../../componentes/comun/sideBar.component';

export default class PlantillaPrivada extends Component {
    render() {
        const Component = this.props.component;
        const route = this.props.route;
        const state = this.props.state;

        return (
            <>
                {/*<SideBar />*/}
                <Component route={route} />
            </>
        )
    }
}