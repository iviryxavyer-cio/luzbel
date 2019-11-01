import React from 'react';
import { Link } from 'react-router-dom';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function SideBar() {
    return (
        <>
            <div>
                <span className="menu-stripe stripe-top"></span>
            </div>
        </>
    )
}

export default SideBar;