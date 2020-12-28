import { Button, IconButton, Badge } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { PointerEventsProperty, PositionProperty } from 'csstype';
import { observer } from 'mobx-react';
import * as React from 'react';
import ApplicationState from '../state/application';

const styles = theme => ({
    root: {
        width: '100%',
        zIndex: theme.zIndex.drawer + 1
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        letterSpacing: "0.07em",
        cursor: "pointer",

    },
    search: {
        position: 'relative' as PositionProperty,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(9),
        height: '100%',
        position: 'absolute' as PositionProperty,
        pointerEvents: 'none' as PointerEventsProperty,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(10),
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
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
});

interface NavBarProps {
    classes: any;
    appState: ApplicationState;
}

const PrimarySearchAppBar = ({ classes, appState }: NavBarProps) => {

    let currentPage: string = appState ? appState.currentPage : "";
    let getUser = appState ? appState.currentPage : "";

    if (appState.currentPage == "login") {
        return null
    }

    appState.getUser();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography className={classes.title} variant="h5" color="inherit" noWrap>
                        <span style={{ fontWeight: "bold" }}>TMS</span> Express
                        <img src="/express.png" style={{ marginLeft: "10px", top: "8px", position: "relative", height: "30px", width: "30px" }} />
                    </Typography>
                    
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <NotificationsButton changePage={appState.changePage} notificationCount={appState.notifications.length} />
                        <ProfileButton currentPage={appState.currentPage} username={appState.user.name} changePage={appState.changePage}/>
                    </div>
                </Toolbar>

            </AppBar>

        </div>
    );
}

interface NotificationsButtonProps {
    notificationCount: number
    changePage: (page: string) => void;
}

const NotificationsButton = ({ notificationCount, changePage }: NotificationsButtonProps) => {
    window.alert("sadfghg");
    let icon = <NotificationsIcon />

    if (notificationCount > 0) {
        icon = <Badge badgeContent={notificationCount} color={"secondary"}>
            <NotificationsIcon />
        </Badge>
    }

    return <IconButton color="inherit" onClick={() => changePage("notifications")}>
        {icon}
    </IconButton>
}

interface ProfileButtonProps {
    currentPage: string;
    changePage(page: string): void;
    username: string;
}

const ProfileButton = (props: ProfileButtonProps) => {

    let currentPage: string = props ? props.currentPage : null;
    let changePage = props ? props.changePage : (page: string) => { return; };
    let username: string = props ? props.username : "James";

    switch (currentPage) {
        case "login":
            return null;
        default:
            return (
                <Button onClick={() => changePage("profile")} color="inherit">
                    <AccountCircle style={{ marginRight: "10px" }} />
                    {username}
                </Button>
            );
    }
}

export default withStyles(styles)(observer(PrimarySearchAppBar));
