// FILEPATH: src/pageStates/streamer/state-streamer-view.ts

import * as React from "react";
import { decorate, observable, action } from "mobx";
import { IStreamerServiceRequests } from '../../services/streamer/service-order-requests'
import { IStreamerViewPageProp } from '../../pages/streamer/page-streamer-view';
import { IStreamerHeaderTableRowProp } from '../../pages/streamer/comp-streamerHeaderTableRow';
import { IStreamerItemTableRowProp } from '../../pages/streamer/comp-streamerItemTableRow';

class StreamerViewPageState implements IStreamerViewPageProp {

    // from prop
    classes: any;
    hasError: boolean;
    isLoading: boolean;
    streamerHeader: IStreamerHeaderTableRowProp;
    streamerItems: Array<IStreamerItemTableRowProp>;
    canConnect: boolean;
    error: string;
    changePerPage: (perPage: number) => void;
    tableRowsPerPage: number;
    tablePageNumber: number;
    tableTotalRows: number;
    tableOnChangePage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => void;
    tableOnChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    textSearch: () => void;
    viewButtonChangePage: () => void;

    constructor() {
        this.tableOnChangePage = this.UpdateTablePageNumber;
        this.tableOnChangeRowsPerPage = this.UpdateTableRowsPerPage;
    }

    //internal methods

    UpdateTablePageNumber(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, tablePageNumber: number){
        this.tablePageNumber = tablePageNumber;
    }

    UpdateTableRowsPerPage(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        this.tableRowsPerPage = Number(event.target.value);
    }

    // service call to get service
}

decorate(StreamerViewPageState, {
    hasError: observable,
    isLoading: observable,
    streamerHeader: observable,
    streamerItems: observable,
    canConnect: observable,
    error: observable,
    changePerPage: action.bound,
    tableRowsPerPage: observable,
    tablePageNumber: observable,
    tableTotalRows: observable,
    tableOnChangePage: action.bound,
    tableOnChangeRowsPerPage: action.bound,
    textSearch: action.bound,
    viewButtonChangePage: action.bound
});

export default StreamerViewPageState;
