import * as React from 'react';
import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';
import ApplicationPageState from './pageStates/pageState-application';
import ApplicationPage  from './pages/page-application';
import StreamerListPageState from './pageStates/streamer/pageState-streamer-list';
import StreamerViewPageState from './pageStates/streamer/pageState-streamer-view';
import StreamerTableRowState from './pageStates/streamer/compState-streamerTableRow';
import { IStreamerTableRowProp } from './pages/streamer/comp-streamerTableRow';

const theme = createMuiTheme({
  palette: {	
	primary: {
      main: '#212121',
	  contrastText: '#ff3d00'
    }
  },
});

let changePage = (currentPage: string, urlParam?: string) => {
    switch (currentPage) {
        case "any":
            return;
        default:
            return;
    }
}

window.onhashchange = (e: HashChangeEvent): any => {
    let url = new URL(e.newURL)
    mainRouting(url.hash)
}

let currentPathname: string = window.location.pathname;

mainRouting(currentPathname);

function mainRouting(hashPath: string) {

    let pathElements: string[] = hashPath.split('/')

    let controller: string = null;
    let view: string = null;
    let model: string = null;

    if (pathElements[1] == "Login") {
        controller = "Login";
    }
    else {
        controller = "App";
    }

    if (controller == "App") // logic should actually be in the App part - but high level controll is fine.
    {
      switch(pathElements[2])
      {
        case "Home":
          view = "Home";
          break;
        case "RequestStream":
          view = "RequestStream";
          break;
        case "JoinStream":
          view = "JoinStream";
          model = pathElements[2];
          break;
        case "Stream":
            view = "Stream";
            model = pathElements[2];
            break;
        case "Help":
          view = "Help";
          break;
        case "About":
          view = "About";
          break;
        case "RequestView":
          view = "RequestView";
          model = pathElements[2];
        break;

        case "MicroPay":
          view = "MicroPay";
          model = pathElements[2];
        break;

        case "StreamView":
          view = "StreamView";
          model = pathElements[2];
        break;        

        default:
          view = "Home";
        break;
      }
    }

    if (controller == "App") {
        let appState = new ApplicationPageState(view);

        appState.primarySearchAppBarProp = { notificationCount: 0, username : "harry", navigateToNotifications: ()=>{}, navigateToProfile: ()=>{}};

        ReactDOM.render(
            <MuiThemeProvider theme={theme}>
                <ApplicationPage {...appState} />

            </MuiThemeProvider>
            , document.getElementById('content'));
    }
    else {

    }
}
