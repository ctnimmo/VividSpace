// FILEPATH: src/components/menu.tsx

import * as React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import HelpIcon from '@material-ui/icons/Help';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import StoreIcon from '@material-ui/icons/Store';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import HomeIcon from '@material-ui/icons/Home';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

/// what do they want 

/// Note: XRP pay OR COil account

//// Streamers and Requesters

/// I want to request a video/stream on whatever -> create a request -> willing to pay (advertise price or donate)

    /// I am freelance streamer -> so going to browse the website for work

/// I'm a content/channel streamer ... I am a streamer .. who want to pay / donate to me

    /// I want to watch a channel/stream -> so going to browse the website for work

/// Live Chat ... two-way stream ?? or one-sided

/*

• Rankings for prioritising both requests and streams
• General
• Location (longitude, latitude, radius adjustment based on terrain)
• Reputation rating of video supplier
• Keywords in description terms
• Select / deselect certain tags
• Total view count / duration
• Live chat
• Total value of tips received
• Trending: velocity of growth in view count (and decay)
• Search: relevance of description term
• Personalised recommendation: collaborative and content-based filtering
• Boost in the ranking for users with premium subscription
• Demotion in the ranking for users with poor track record

*/


const drawerWidth = 240;

const styles = theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
});

export interface MenuProp {
    classes?: any;
    selected_Home: boolean;
    address_Home: string;

    selected_RequestStream: boolean;
    address_RequestStream: string;

    selected_JoinStream: boolean;
    address_JoinStream: string;

    selected_Stream: boolean;
    address_Stream: string;

    selected_Help: boolean;
    address_Help: string;

    selected_About: boolean;
    address_About: string;
}

const Menu = (p:MenuProp) => {
    return (
        <Drawer
            className={p.classes.drawer}
            variant="permanent"
            classes={{
                paper: p.classes.drawerPaper,
            }}
            anchor="left"
            color="primary"
        >
            <div className={p.classes.toolbar} />

            <List>

                <ListItem button selected={p.selected_Home} onClick={(event) => { window.location.href = p.address_Home }}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>

                <Divider />

                <ListItem button selected={p.selected_RequestStream} onClick={(event) => { window.location.href = p.address_RequestStream }}>
                    <ListItemIcon>
                        <LiveTvIcon />
                    </ListItemIcon>
                    <ListItemText primary="Request Stream" />
                </ListItem>

                <ListItem button selected={p.selected_JoinStream} onClick={(event) => { window.location.href = p.address_JoinStream }}>
                    <ListItemIcon>
                        <LiveTvIcon />
                    </ListItemIcon>
                    <ListItemText primary="Join Stream" />
                </ListItem>

                <ListItem button selected={p.selected_Stream} onClick={(event) => { window.location.href = p.address_Stream }}>
                    <ListItemIcon>
                        <LiveTvIcon />
                    </ListItemIcon>
                    <ListItemText primary="Stream" />
                </ListItem>

                <Divider />

                <ListItem button selected={p.selected_Help} onClick={(event) => { window.location.href = p.address_Help }}>
                    <ListItemIcon>
                        <HelpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Help" />
                </ListItem>

                <ListItem button selected={p.selected_About} onClick={(event) => { window.location.href = p.address_About }}>
                    <ListItemIcon>
                        <FormatListBulletedIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>

            </List>
        </Drawer>
    );
};

export default withStyles(styles)(observer(Menu));
