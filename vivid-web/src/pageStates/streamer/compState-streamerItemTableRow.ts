// FILEPATH: src/pageStates/streamer/compState-streamerItemTableRow.ts

import * as React from "react";
import { decorate, observable, action, } from "mobx";
import { IStreamerItemTableRowProp } from '../../pages/streamer/comp-streamerItemTableRow';

class StreamerItemTableRowCompState implements IStreamerItemTableRowProp {
    classes: any;
    streamerItemID: string;
    streamerRef: string;
    style: string;
    styleDescription: string;
    colour: string;
    size: string;
    quantity: string;
    labelID: string;
    isLoading: boolean;
    viewButtonChangePage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

    constructor() {
        this.viewButtonChangePage = this.RedirectToStreamerViewPage;
    }

    RedirectToStreamerViewPage(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        window.location.href = "#/App/StreamerView/" + this.orderItemID;
    }
}

decorate(StreamerItemTableRowCompState, {
    streamerItemID: observable,
    streamerRef: observable,
    style: observable,
    styleDescription: observable,
    colour: observable,
    size: observable,
    quantity: observable,
    labelID: observable,

    isLoading: observable,
    viewButtonChangePage: action.bound
});

export default StreamerItemTableRowCompState;
