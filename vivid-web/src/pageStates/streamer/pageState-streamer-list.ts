// FILEPATH: src/pageStates/streamer/pageState-streamer-list.ts

import * as React from "react";
import { decorate, observable, action } from "mobx";
import { IStreamerServiceRequests } from '../../services/streamer/service-order-requests'
import { IStreamerListPageProp } from '../../pages/streamer/page-streamer-list';
import { IStreamerTableRowProp } from '../../pages/streamer/comp-streamerTableRow';

class StreamerListPageState implements IStreamerListPageProp {

    // from prop
    classes: any;
    hasError: boolean;

    // changePage: (page: string, data?: string) => void;
    isLoading: boolean;
    streamerSummaryList: Array<IStreamerTableRowProp>;
    canConnect: boolean;
    error: string;
    tableRowsPerPage: number;
    tablePageNumber: number;
    tableTotalRows: number;
    tableOnChangePage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => void;
    tableOnChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    textSearch: () => void;
    viewButtonChangePage: () => void;
    viewPurchaseOrderDetails: (purchaseOrderNumber: string) => void;

    //additional required properties for class
    private svc: IStreamerServiceRequests;

    searchText: string;

    /*
    constructor(svc?: IStreamerServiceRequests) {
        if (svc)
        {
            this.svc = svc;
        }
    */

    constructor() {
        this.tableOnChangePage = this.UpdateTablePageNumber;
        this.tableOnChangeRowsPerPage = this.UpdateTableRowsPerPage;
    }

    //internal methods

    private UpdateTablePageNumber(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, tablePageNumber: number){
        this.tablePageNumber = tablePageNumber;
    }

    private UpdateTableRowsPerPage(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        this.tableRowsPerPage = Number(event.target.value);
    }

    // service call to get service
}

decorate(StreamerListPageState, {
    hasError: observable,
    isLoading: observable,
    streamerSummaryList: observable,
    canConnect: observable,
    error: observable,
    tableRowsPerPage: observable,
    tablePageNumber: observable,
    tableTotalRows: observable,
    tableOnChangePage: action.bound,
    tableOnChangeRowsPerPage: action.bound,
    textSearch: action.bound,
    viewButtonChangePage: action.bound,
});

export default StreamerListPageState;
