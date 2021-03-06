import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import './App.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import Servidores from './pages/Servidores';
import Conectores from "./pages/Conectores";
import Conexiones from "./pages/Conexiones";

function App() {
  return (
      <Router>
        <Route render={({ location, history }) => (
            <React.Fragment>
              <SideNav
                  onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                      history.push(to);
                    }
                  }}
              >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                  <NavItem eventKey="home">
                    <NavIcon>
                      <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                      Home
                    </NavText>
                  </NavItem>
                    <NavItem eventKey="usuarios">
                        <NavIcon>
                            <i className="fa fa-fw fa-users" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Usuarios
                        </NavText>
                    </NavItem>
                  <NavItem eventKey="servidores">
                    <NavIcon>
                      <i className="fa fa-fw fa-server" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                      Servidores
                    </NavText>
                  </NavItem>
                    <NavItem eventKey="conectores">
                        <NavIcon>
                            <i className="fa fa-fw fa-plug" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Conectores
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="conexiones">
                        <NavIcon>
                            <i className="fa fa-fw fa-database" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Conexiones
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
              </SideNav>
              <main>
                <Route path="/servidores" component={props => <Servidores />} />
                <Route path="/conectores" component={props => <Conectores/>} />
                <Route path="/conexiones" component={props => <Conexiones/>} />
              </main>
            </React.Fragment>
        )}
        />
      </Router>
  );
}

export default App;
