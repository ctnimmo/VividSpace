// FILEPATH: src/pageStates/pageState-application.ts

import * as React from "react";
import { action, decorate, observable } from 'mobx';
import { IApplicationPageProp } from '../pages/page-application';
import { IStreamerListPageProp } from '../pages/streamer/page-streamer-list';
import { IStreamerViewPageProp } from '../pages/streamer/page-streamer-view';
// import { IRippleTestPageProp } from '../pages/page-ripple-test';
import StreamerListPageState from '../pageStates/streamer/pageState-streamer-list';
import StreamerViewPageState from '../pageStates/streamer/pageState-streamer-view';
import PrimarySearchAppBar from '../components/primary-search-app-bar';
import { PrimarySearchAppBarProp } from '../components/primary-search-app-bar';
import MenuState from '../components/menu-state';
import { MenuProp } from '../components/menu';
import { MenuProps } from "@material-ui/core/Menu";
import { HomePageProp } from '../pages/page-home';
import { RequestStreamPageProp } from '../pages/page-request-stream';
import { JoinStreamPageProp } from '../pages/page-join-stream';
import { StreamPageProp } from '../pages/page-stream';
import { HelpPageProp } from '../pages/page-help';
import { AboutPageProp } from '../pages/page-about';
import { RequestViewPageProp } from '../pages/page-request-view';
import { MicroPayPageProp } from '../pages/page-micropay';
import { StreamViewPageProp } from '../pages/page-stream-view';

class ApplicationPageState { // implements IApplicationPageProp

    view: string;

    primarySearchAppBarProp: PrimarySearchAppBarProp;
    menuProp: MenuProp;
    homePageProp: HomePageProp;
    requestStreamPageProp: RequestStreamPageProp;
    joinStreamPageProp: JoinStreamPageProp;
    streamPageProp: StreamPageProp;
    helpPageProp: HelpPageProp;
    aboutPageProp: AboutPageProp;
    requestViewPageProp:RequestViewPageProp;
    microPayPageProp:MicroPayPageProp;
    streamViewPageProp:StreamViewPageProp;

    constructor(view?:string) {
        this.view = view;

        const addressHome = '#/App/Home';
        const addressRequestStream ='#/App/RequestStream';
        const addressJoinStream = '#/App/JoinStream';
        const addressStream = '#/App/Stream';
        const addressHelp = '#/App/Help';
        const addressAbout = '#/App/About';
        
        let menuProp: MenuProp = {
            selected_Home: false,
            address_Home: addressHome,
            selected_RequestStream: false,
            address_RequestStream: addressRequestStream,
            selected_JoinStream: false,
            address_JoinStream: addressJoinStream,
            selected_Stream: false,
            address_Stream: addressStream,
            selected_Help: false,
            address_Help: addressHelp,
            selected_About: false,
            address_About: addressAbout
        };

        switch(this.view) {
            case 'Home':
                menuProp.selected_Home = true;
            break;
            case 'RequestStream':
                menuProp.selected_RequestStream = true;
            break;
            case 'JoinStream':
                menuProp.selected_JoinStream = true;
            break;            
            case 'Stream':
                menuProp.selected_Stream = true;
            break;
            case 'Help':
                menuProp.selected_Help = true;
            break;
            case 'About':
                menuProp.selected_About = true;
            break;
            default:
                menuProp.selected_Home = true;
            break;
        }

        this.menuProp = menuProp;
    }

    UpdateView(){
        this.menuProp.selected_Home = false;
        this.menuProp.selected_RequestStream = false;
        this.menuProp.selected_JoinStream = false;
        this.menuProp.selected_Stream = false;
        this.menuProp.selected_Help = false;
        this.menuProp.selected_About = false;

        switch(this.view) {
            case 'Home':
                this.menuProp.selected_Home = true;
            break;
            case 'RequestStream':
                this.menuProp.selected_RequestStream = true;
            break;
            case 'JoinStream':
                this.menuProp.selected_JoinStream = true;
            break;            
            case 'Stream':
                this.menuProp.selected_Stream = true;
            break;
            case 'Help':
                this.menuProp.selected_Help = true;
            break;
            case 'About':
                this.menuProp.selected_About = true;
            break;
            default:
                this.menuProp.selected_Home = true;
            break;
        }
    }
}

decorate(ApplicationPageState, {
    view: observable,
    primarySearchAppBarProp: observable,
    menuProp: observable,
    homePageProp: observable,
    requestStreamPageProp: observable,
    joinStreamPageProp: observable,
    streamPageProp: observable,
    helpPageProp: observable,
    aboutPageProp: observable,
    requestViewPageProp: observable,
    microPayPageProp:observable,
    streamViewPageProp:observable,
    UpdateView:action.bound
});

export default ApplicationPageState;
