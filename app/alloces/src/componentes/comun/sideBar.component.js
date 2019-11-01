import React from 'react';
import { Link } from 'react-router-dom';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function SideBar() {
    return (
        <SideNav>
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <Link to='/home'>
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </Link>
                </NavItem>
                <NavItem eventKey="usuarios">
                    <Link to='/usuarios'>
                        <NavIcon>
                            <i className="fa fa-fw fa-users" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Usuarios
                        </NavText>
                    </Link>
                </NavItem>
                <NavItem eventKey="servidores">
                    <Link to='/servidores'>
                        <NavIcon>
                            <i className="fa fa-fw fa-server" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Servidores
                        </NavText>
                    </Link>
                </NavItem>
                <NavItem eventKey="conectores">
                    <Link to='/conectores'>
                        <NavIcon>
                            <i className="fa fa-fw fa-plug" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Conectores
                        </NavText>
                    </Link>
                </NavItem>
                <NavItem eventKey="conexiones">
                    <Link to="/conexiones">
                        <NavIcon>
                            <i className="fa fa-fw fa-database" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Conexiones
                        </NavText>
                    </Link>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    )
}

export default SideBar;