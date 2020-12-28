// FILEPATH: src/pageStates/streamer/compState-streamerTableRow.ts

import * as React from "react";
import { decorate, observable, ObservableMap, action, computed } from "mobx";
import { IStreamerTableRowProp } from '../../pages/streamer/comp-streamerTableRow';

class StreamerTableRowCompState implements IStreamerTableRowProp {
    classes: any;
    streamer: string; 
    contentType: string; 
    availableTo: string; 
    snapshot: string;
    rating: string;
    isViewDetailsDisabled: boolean;
    viewDetailsOnClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

    constructor() {
        this.viewDetailsOnClick = this.RedirectToStreamerViewPage;
    }

    RedirectToStreamerViewPage(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        window.location.href = "#/App/StreamerView/" + this.streamer;
    }
}

decorate(StreamerTableRowCompState, {
    streamer: observable,
    contentType: observable,
    availableTo: observable,
    snapshot: observable,
    rating: observable,
    isViewDetailsDisabled: observable,
    viewDetailsOnClick: action.bound
});

export default StreamerTableRowCompState;
