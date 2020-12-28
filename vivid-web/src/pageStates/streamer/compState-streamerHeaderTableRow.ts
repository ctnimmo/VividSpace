// FILEPATH: src/pageStates/streamer/compState-streamerHeaderTableRow.ts

import { decorate, observable } from "mobx";
import { IStreamerHeaderTableRowProp } from '../../pages/streamer/comp-streamerHeaderTableRow';

class StreamerTableRowCompState implements IStreamerHeaderTableRowProp {
    classes:any;
    streamerHeaderID: string;
    streamerNumber: string;
    madeFor: string;
    dueDate: string;
    status: string;

    constructor() {}
}

decorate(StreamerTableRowCompState, {
    streamerHeaderID: observable,
    streamerNumber: observable,
    madeFor: observable,
    dueDate: observable,
    status: observable
});

export default StreamerTableRowCompState;
