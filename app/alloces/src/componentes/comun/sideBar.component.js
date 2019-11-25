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

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import { Link } from 'react-router-dom';

import { menuPrivado } from '../../plantilla/privado/menuPrivado';
import '../../css/sidebar.scss';

const SideBar = () => {
    //Se crea una propiedad en el state del componente y una funcion para interactuar con esta 
    // propiedad.
    const [open, setOpen] = React.useState(false);

    //Se crea una funcion para manejar el click en dentro del menu
    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <List component="nav" className="appMenu" disablePadding>
            {/* Se itera el array menuPrivado que contiene los elementos y sus propiedades del menu.
                Si la propiedad collapse del elemento es true quiere decir que tiene un sub menu y 
                    contruira primero un elemento con el icono, texto y botones de abrir y cerrar. Despues
                    iterara cada uno de lo elementos dentro de esa propiedad para agregarlos al submenu.
                Si la propiedad collapse es false entonces es un elemento sin submenu y se creará
                    con sus propiedades.
            */}
            {menuPrivado.map((element, key) => {
                return (
                element.collapse ? 
                    <>
                    <ListItem button onClick={handleClick} className="menuItem">
                        <ListItemIcon className="menuItemIcon">
                            {element.icon}
                        </ListItemIcon>
                        <ListItemText primary={element.name} className="textColor" />
                        {open ?
                            element.openIcon : element.closeIcon
                        }
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Divider />
                        <List component="div" disablePadding>
                            {element.collapseItems.map((innerElement, innerKey) => {
                                return (
                                    <Link to={innerElement.link}>
                                        <ListItemText inset primary={innerElement.name} className="textColor" />
                                    </Link>
                                )
                            })}
                            <Divider />
                        </List>
                    </Collapse>
                    <Divider />
                    </>
                :
                    <>
                        <ListItem button className="menuItem">
                            <ListItemIcon className="menuItemIcon">
                                {element.icon}
                            </ListItemIcon>
                            <ListItemText primary={element.name} className="textColor" />
                        </ListItem>
                        <Divider />
                    </>
            )})
            }
        </List>
    )
}

export default SideBar;