import React from 'react';
import { Link } from 'react-router-dom';
//import { historial } from '../../Utilidades/historial';
import { connect } from 'react-redux';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { loginActions } from '../../actions/login.actions';

class SideBar extends React.Component {
    constructor(props) {
        super(props)

        console.log(this.props)
    }

    render() {
        const style = {
            fontSize: '1.75em'
        }
        return (
            <SideNav onSelect={(selected) => {
                console.log(selected)
                if (selected === 'logout') {
                    this.props.dispatch(loginActions.logOut())
                }
            }}
            >
                <Toggle />
                <Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <Link to="/"><i className="fa fa-fw fa-home" style={style} /></Link>
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="usuarios">
                        <NavIcon>
                            <Link to="/usuarios"><i className="fa fa-fw fa-users" style={style} /></Link>
                        </NavIcon>
                        <NavText>
                            Usuarios
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="servidores">
                        <NavIcon>
                            <Link to="/servidores"><i className="fa fa-fw fa-server" style={style} /></Link>
                        </NavIcon>
                        <NavText>
                            Servidores
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="conectores">
                        <NavIcon>
                            <Link to="/conectores"><i className="fa fa-fw fa-plug" style={style} /></Link>
                        </NavIcon>
                        <NavText>
                            Conectores
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="conexiones">
                        <NavIcon>
                            <Link to="/conexiones"><i className="fa fa-fw fa-database" style={style} /></Link>
                        </NavIcon>
                        <NavText>
                            Conexiones
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="logout">
                        <NavIcon>
                            <i className="fa fa-fw fa-lock" style={style} />
                        </NavIcon>
                        <NavText>
                            Cerrar sesion
                        </NavText>
                    </NavItem>
                </Nav>
            </SideNav>
        )
    }
}

function mapStatetoProps(state) { return { stateApp: state } }
function mapDispatchtoProps(dispatch) { return { dispatch } }

export default connect(
    mapStatetoProps,
    mapDispatchtoProps
)(SideBar);