// FILEPATH: src/pages/page-application.tsx

import * as React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import { FlexDirectionProperty } from 'csstype';
import CssBaseline from '@material-ui/core/CssBaseline';
import PrimarySearchAppBar from '../components/primary-search-app-bar';
import { PrimarySearchAppBarProp } from '../components/primary-search-app-bar';
import Menu from '../components/menu';
import { MenuProp } from '../components/menu';
import HomePage from './page-home'
import { HomePageProp } from './page-home'
import RequestStreamPage from './page-request-stream';
import { RequestStreamPageProp } from './page-request-stream';
import JoinStreamPage from './page-join-stream';
import { JoinStreamPageProp } from './page-join-stream';
import StreamPage from './page-stream';
import { StreamPageProp } from './page-stream';
import HelpPage from './page-help';
import { HelpPageProp } from './page-help';
import AboutPage from './page-about';
import { AboutPageProp } from './page-about';
import RequestViewPage from './page-request-view';
import { RequestViewPageProp } from './page-request-view';
import MicroPayPage from './page-micropay';
import { MicroPayPageProp } from './page-micropay';
import StreamViewPage from './page-stream-view';
import { StreamViewPageProp } from './page-stream-view';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        width: "100%",
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    progress: {
        display: 'flex',
        flexDirection: 'column' as FlexDirectionProperty,
        alignItems: 'center',
        margin: theme.spacing(2),
    },
});

export interface IApplicationPageProp {
    classes?: any;
    view: string; // not sure this should really be in this part.

    primarySearchAppBarProp: PrimarySearchAppBarProp;
    menuProp: MenuProp;
    homePageProp: HomePageProp;
    requestStreamPageProp: RequestStreamPageProp;
    joinStreamPageProp: JoinStreamPageProp;
    streamPageProp: StreamPageProp;
    aboutPageProp: AboutPageProp;
    helpPageProp: HelpPageProp;
    requestViewPageProp: RequestViewPageProp;
    microPayPageProp: MicroPayPageProp;
    streamViewPageProp: StreamViewPageProp;
}

const ApplicationPage = (p: IApplicationPageProp) => {
    return (
        <div className={p.classes.root}>
            <CssBaseline />
            <div className={p.classes.appBar}>
                <PrimarySearchAppBar {...p.primarySearchAppBarProp} />
            </div>
            <Menu {...p.menuProp}/>
            <main className={p.classes.content}>
                <div className={p.classes.toolbar} />
                <div style={{ display: "block" }}>
                    {chooseMainPage(p)}
                </div>
            </main>

        </div>
    );
};

export default withStyles(styles)(observer(ApplicationPage));

function chooseMainPage(p: IApplicationPageProp) {
    let page = null;

    switch (p.view) {
        case "Home":
            page = <HomePage {...p.homePageProp}/>
        break;

        case "RequestStream":
            page = <RequestStreamPage {...p.requestStreamPageProp}/>
        break;

        case "JoinStream":
            page = <JoinStreamPage {...p.joinStreamPageProp}/>
        break;    

        case "Stream":
            page = <StreamPage {...p.streamPageProp}/>
        break; 
        
        case "Help":
            page = <HelpPage {...p.helpPageProp}/>
        break;

        case "About":
            page = <AboutPage {...p.aboutPageProp}/>
        break;

        case "RequestView":
            page = <RequestViewPage {...p.requestViewPageProp}/>
        break;

        case "MicroPay":
            page = <MicroPayPage {...p.microPayPageProp}/>
        break;

        case "StreamView":
            page = <StreamViewPage {...p.streamViewPageProp}/>
        break;

        default:
            page = <HomePage {...p.homePageProp}/>
        break;
    }
    return(page);
}
