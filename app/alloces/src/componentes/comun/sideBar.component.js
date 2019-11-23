/**
 * @author Luis Manuel Torres Treviño
 * @date 23/11/2019
 * @fileoverview Este archivo contiene el componente del menu lateral
 * @version 1.0.0
 * 
 * Historial
 * v.1.0.0 - Esta version del archivo es el que se encarga de crear el menu sidebar
 */
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';

import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import IconDashboard from '@material-ui/icons/Dashboard';
import IconShoppingCart from '@material-ui/icons/ShoppingCart';
import IconPeople from '@material-ui/icons/People';
import IconBarChart from '@material-ui/icons/BarChart';
import IconLibraryBooks from '@material-ui/icons/LibraryBooks';

import '../../css/sidebar.scss';

const SideBar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <List component="nav" className="appMenu" disablePadding>
            <ListItem button onClick={handleClick} className="menuItem">
                <ListItemIcon className="menuItemIcon">
                    <IconLibraryBooks className="colorIcon"/>
                </ListItemIcon>
                <ListItemText primary="Catalogos" className="textColor"/>
                {open ? 
                    <IconExpandLess className="secondaryIcon" /> : 
                    <IconExpandMore className="secondaryIcon" />
                }
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Divider />
                <List component="div" disablePadding>
                    <ListItem button className="menuItem">
                        <ListItemText inset primary="Usuarios" className="textColor" />
                    </ListItem>
                </List>
            </Collapse>
        </List>
    )
}

export default SideBar;