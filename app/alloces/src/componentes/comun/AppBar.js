import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useSelector,useDispatch} from 'react-redux';

import { loginActions } from '../../actions/login.actions';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    appBar: {
        background: '#676CFF',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    botonBarStyle: {
        float: "right"
    },
}));

export default function TopBar(props) {
    const classes = useStyles();
    const authentication = useSelector(state => state.authentication);
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    const handleLogout = () => {
        dispatch(loginActions.logOut())
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'rigth'}}
            open={isMenuOpen}
            onClose={handleMenuClose} >
            <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
    )

    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="abrir"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>Cain</Typography>
                    <div className={classes.search}></div>
                    <div className={classes.grow}>
                        <div className={classes.sectionDesktop, classes.botonBarStyle}>
                            {!authentication.loggedIn ? 
                                undefined : 
                                <IconButton aria-label="notificaciones" color="inherit">
                                    <Badge badgeContent={1} color='secondary'>
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                            }
                            {!authentication.loggedIn ?
                                <Button 
                                    variant="contained" 
                                    color="secondary"
                                    onClick={e => console.log('click')}>Registrarse</Button> :
                                <IconButton 
                                    edge="end"
                                    aria-label="current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            }
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </div>
    )

}