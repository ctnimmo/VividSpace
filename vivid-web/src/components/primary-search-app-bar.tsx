// FILEPATH: src/components/primary-search-app-bar.tsx

import * as React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import NotificationsButton from './notifications-button'
import ProfileButton from './profile-button'

const styles = theme => ({
    root: {
        width: '100%',
        zIndex: theme.zIndex.drawer + 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        letterSpacing: "0.07em",
        cursor: "pointer",

    },
    grow: {
        flexGrow: 1,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    }
});

export interface PrimarySearchAppBarProp {
    classes?: any;
    notificationCount: number;
    username: string;
    navigateToNotifications: ()=>void;
    navigateToProfile: ()=>void;
}

const PrimarySearchAppBar = (p: PrimarySearchAppBarProp) => {
    return (
        <div className={p.classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography className={p.classes.title} variant="h5" color="inherit" noWrap>
                        <span style={{ fontWeight: "bold" }}></span>
                        <img src="/vivid-logo-2.png" style={{ marginLeft: "25px", top: "10px", marginBottom: "10px", position: "relative", height: "60px" }} />
                    </Typography>
                    <div className={p.classes.grow} />
                    <div className={p.classes.sectionDesktop}>
                        <NotificationsButton navigateToNotifications={p.navigateToNotifications} notificationCount={p.notificationCount}/>
                        <ProfileButton navigateToProfile={p.navigateToProfile} username={p.username}/>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(observer(PrimarySearchAppBar));
